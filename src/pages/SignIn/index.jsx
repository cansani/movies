import { Container, Form, Background } from './styles'

import { Link } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { FiMail, FiLock } from 'react-icons/fi'

import { useAuth } from '../../hooks/auth'
import { useState } from 'react'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <Container>

      <Form>
        <div className='title-wrapper'>
          <h1>Movies</h1>
          <span>Aplicação para acompanhar tudo que assistir.</span>
        </div>

        <h2>Faça seu login</h2>

        <div className='input-wrapper'>
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
          title="Entrar"
          onClick={handleSignIn}
        />


        <Link to="/register" href="#">
          Criar conta
        </Link>
      </Form>

      <Background />
    </Container>
  )
}