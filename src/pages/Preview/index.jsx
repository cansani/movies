import { Container, Content } from './styles'

import { Link, useNavigate } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Tag } from '../../components/Tag'
import { Button } from '../../components/Button'

import { FiArrowLeft } from 'react-icons/fi'

import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'

export function Preview() {
  const { user } = useAuth()

  const [data, setData] = useState(null)

  const params = useParams()

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchNote()
  }, [])

  const navigate = useNavigate()

  async function handleRemoveFilm() {
      await api.delete(`/notes/${params.id}`);
      navigate('/')

  }

  return (
    <Container>
      <Header />

      {
        data &&
        <main>
        <Content>
          <div className='infos-wrapper'>
            <Link to="/">
                <FiArrowLeft />
                <span>Voltar</span>
            </Link>

            <h1>{data.title}</h1>

            <span>Por {user.name}
              <div className='time'>
                <span></span>
              </div>
            </span>
          </div>

          {
            data.tags &&
            <div className='tags-wrapper'>
            {
              data.tags.map(tag => (
              <Tag
                key={String(tag.id)} 
                title={tag.name}
            />
            ))
            }
          </div>
          }

            <span>
              {data.description}
            </span>

            <Button 
              type="button"
              title="Excluir"
              onClick={handleRemoveFilm}
            />

        </Content>
      </main>
      }
    </Container>
  )
}