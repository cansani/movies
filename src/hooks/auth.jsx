import { createContext, useContext, useState, useEffect } from "react";
import { api } from '../services/api'

const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password })
      const { user, token } = response.data

      localStorage.setItem('@rocketmovies:user', JSON.stringify(user))
      localStorage.setItem('@rocketmovies:token', token)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({ user, token})

    } catch (err) {
      if (err.response) {
        alert(err.response.data.message)
      } else {
        alert('Não foi possivel entrar.')
      }
    }
  }
  
  function signOut() {
    localStorage.removeItem('@rocketmovies:token')
    localStorage.removeItem('@rocketmovies:user')

    setData({})
  }

  async function updateProfile({ user, avatarFile }) {
    try {

      if(avatarFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append('avatar', avatarFile)

        const response = await api.patch('/users/avatar', fileUploadForm)
        user.avatar = response.data.avatar;
      }

      await api.put('/users', user)
      localStorage.setItem('@rocketmovies:user', JSON.stringify(user))

      setData({ user, token: data.token })
      alert('Perfil atualizado com sucesso.')

    } catch (err) {
      if (err.response) {
        alert(err.response.data.message)
      } else {
        alert('Não foi possivel atualizar o perfil.')
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem('@rocketmovies:user')
    const token = localStorage.getItem('@rocketmovies:token')

    if(user && token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      
      setData({
        token,
        user: JSON.parse(user)
      })
    }
  }, [])


  return (
    <AuthContext.Provider value={{ signIn, signOut, updateProfile, user: data.user }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }