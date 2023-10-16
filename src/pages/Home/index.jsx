import { Container, ContainerTitleFilms, ContainerFilms } from './styles'

import { Link } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { CardFilm } from '../../components/CardFilm'

import { AiOutlinePlus } from 'react-icons/ai'

import { useEffect, useState } from 'react'

import { api } from '../../services/api'


export function Home() {
  const [tagsSelected, setTagsSelected] = useState([])
  const [search, setSearch] = useState('')
  const [notes, setNotes] = useState([])

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}&${tagsSelected}`)
      setNotes(response.data)
    }

    fetchNotes()
  }, [tagsSelected, search])


  return (
    <Container>
      <Header />

      <main>
        <ContainerTitleFilms>
          <h1>Meus filmes</h1>
          <Link to="/create">
            <Button
              icon={AiOutlinePlus}
              title="Adicionar filme"
            />
          </Link>
        </ContainerTitleFilms>

        <ContainerFilms>
          {
            notes.map(note => (
              <CardFilm 
                to={`/preview/${note.id}`}
                key={String(note.id)}
                data={note}
            />
          ))
          }
        </ContainerFilms>
      </main>
    </Container>
  )
}

