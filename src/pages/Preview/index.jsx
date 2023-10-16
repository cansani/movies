import { Container, Content } from './styles'

import { Link } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Tag } from '../../components/Tag'

import { FiArrowLeft, FiClock } from 'react-icons/fi'

import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'

export function Preview() {
  const [data, setData] = useState(null)

  const params = useParams()

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchNote()
  }, [])

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

            <span>Por Enzzo
              <div className='time'>
                <FiClock /> 23/05/22 ás 08:00
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
        </Content>
      </main>
      }
    </Container>
  )
}