import { Container, Profile } from './styles'

import { Link } from 'react-router-dom'

import { Input } from '../Input'
import { ButtonText } from '../ButtonText'

import { BiSearch } from 'react-icons/bi'

export function Header() {
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
          <span>Enzzo</span>
          <ButtonText
            size={1.4}
            title="sair"
          />
        </div>
        <Link to="profile">
          <img src="https://github.com/cansani.png" alt="avatar" />
        </Link>
      </Profile>
    </Container>
  )
}