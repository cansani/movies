import { Container, Profile } from './styles'

import { Link, useNavigate } from 'react-router-dom'

import { Input } from '../Input'
import { ButtonText } from '../ButtonText'

import { BiSearch } from 'react-icons/bi'

import { useAuth } from '../../hooks/auth'

import { api } from '../../services/api'

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'



export function Header() {
  const { signOut, user } = useAuth()
  const navigation = useNavigate()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  function handleSignOut() {
    navigation('/')
    signOut()
  }

  return (
    <Container>
      <Link to="/">
        <h1>RocketMovies</h1>
      </Link>
      <Input
        type="text"
        icon={BiSearch}
        placeholder="Pesquisar pelo título"
      />
      <Profile>
        <div className='text-wrapper'>
          <span>{user.name}</span>
          <ButtonText
            size={1.4}
            title="sair"
            onClick={handleSignOut}
          />
        </div>
        <Link to="profile">
          <img src={avatarUrl} alt={user.name} />
        </Link>
      </Profile>
    </Container>
  )
}