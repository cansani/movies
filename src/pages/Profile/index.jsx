import { Container, Form, Avatar } from './styles'

import { Link } from 'react-router-dom'

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button';

export function Profile() {
  return (
    <Container>
      <header>
          <Link to="/">
            <FiArrowLeft />
            <span>Voltar</span>
          </Link>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/cansani.png" alt="user image" />

          <label htmlFor="avatar">
            <FiCamera />
            <input
              id="avatar"
              type="file"
            />
          </label>
        </Avatar>
        <div>
          <Input
            type="text"
            icon={FiUser}
            placeholder="Novo nome"
          />
          <Input
            type="text"
            icon={FiMail}
            placeholder="Novo email"
          />
        </div>
        <div>
          <Input
            type="password"
            icon={FiLock}
            placeholder="Senha atual"
          />
          <Input
            type="password"
            icon={FiLock}
            placeholder="Nova senha"
          />
        </div>
        
        <Button
          title="Salvar"
        />
      </Form>
    </Container>
  )
}