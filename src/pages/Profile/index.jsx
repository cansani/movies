import { Container, Form, Avatar } from './styles'

import { Link } from 'react-router-dom'

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button';

import { useAuth } from '../../hooks/auth';
import { useState } from 'react';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { api } from '../../services/api';

export function Profile() {
  const { user, updateProfile } = useAuth()
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState('')
  const [passwordNew, setPasswordNew] = useState('')

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    }

    const userUpdated = Object.assign(user, updated)

    await updateProfile({ user: userUpdated, avatarFile })
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  } 
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
          <img src={avatar} alt="user image" />

          <label htmlFor="avatar">
            <FiCamera />
            <input
              id="avatar"
              type="file"
              onChange={handleChangeAvatar}
            />
          </label>
        </Avatar>
        <div>
          <Input
            type="text"
            icon={FiUser}
            placeholder="Novo nome"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Input
            type="text"
            icon={FiMail}
            placeholder="Novo email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <Input
            type="password"
            icon={FiLock}
            placeholder="Senha atual"
            onChange={e => setPasswordOld(e.target.value)}
          />
          <Input
            type="password"
            icon={FiLock}
            placeholder="Nova senha"
            onChange={e => setPasswordNew(e.target.value)}
          />
        </div>
        
        <Button
          type="button"
          title="Salvar"
          onClick={handleUpdate}
        />
      </Form>
    </Container>
  )
}