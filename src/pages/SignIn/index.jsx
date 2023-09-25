import { Container, Form, Background } from './styles'

import { Link } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

import { FiMail, FiLock } from 'react-icons/fi'

export function SignIn() {
  return (
    <Container>

      <Form>
        <div className='title-wrapper'>
          <h1>RocketMovies</h1>
          <span>Aplicação para acompanhar tudo que assistir.</span>
        </div>

        <h2>Faça seu login</h2>

        <div className='input-wrapper'>
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
          className="btnCreateAccount" 
          title="Criar conta"
        /> */}

        <Link to="/register" href="#">
          Criar conta
        </Link>
      </Form>

      <Background />
    </Container>
  )
}