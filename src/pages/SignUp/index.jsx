import { Container, Form, Background } from './styles'

import { Link, useNavigate } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'

import { useState } from 'react'
import { api } from '../../services/api'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  function handleSignUp() {
    if(!name || !email || !password) {
      return alert('Please fill in all fields.')
    }

    api.post('/users', { name, email, password })
      .then(() => {
        alert('User successfully registered.')
        navigate('/')
      })
      .catch(err => {
        if(err.response) {
          alert(err.response.data.message)
        } else {
          alert('Unable to register.')
        }
      })
  }

  return (
    <Container>

      <Form>
        <div className='title-wrapper'>
          <h1>Movies</h1>
          <span>Aplicação para acompanhar tudo que assistir.</span>
        </div>

        <h2>Crie sua conta</h2>

        <div className='input-wrapper'>
          <Input
            type="text"
            icon={FiUser}
            placeholder="Usuario"
            onChange={e => setName(e.target.value)}
          />
          <Input
            type="text"
            icon={FiMail}
            placeholder="E-mail"
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            type="password"
            icon={FiLock}
            placeholder="Senha"
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <Button
          type="button" 
          title="Cadastrar"
          onClick={handleSignUp}
        />
         <Link to="/" className='btnLinkBack'>
          < FiArrowLeft />
          <span>Voltar para o login</span>
        </Link>
      </Form>

      <Background />
    </Container>
  )
}