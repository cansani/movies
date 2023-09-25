import { Container, Form, Background } from './styles'

import { Link } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'

export function SignUp() {
  return (
    <Container>

      <Form>
        <div className='title-wrapper'>
          <h1>RocketMovies</h1>
          <span>Aplicação para acompanhar tudo que assistir.</span>
        </div>

        <h2>Crie sua conta</h2>

        <div className='input-wrapper'>
          <Input
            type="text"
            icon={FiUser}
            placeholder="Nome"
          />
          <Input
            type="text"
            icon={FiMail}
            placeholder="E-mail"
          />
          <Input
            type="password"
            icon={FiLock}
            placeholder="Senha"
          />
        </div>

        <Button 
          title="Entrar"
        />

{/*         <ButtonText
          className="btnBack" 
          title="Criar conta"
        /> */}

          <Link to="/" className='btnLinkBack'>
            < FiArrowLeft />
            <span>Voltar para o login</span>
          </Link>
      </Form>

      <Background />
    </Container>
  )
}