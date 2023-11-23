import { Container, Content, TextArea, ButtonDelete } from './styles'

import { Link } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Marker } from '../../components/Marker'

import { FiArrowLeft } from 'react-icons/fi'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'

export function Create() {
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const navigate = useNavigate()

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted ))
  }

  async function handleNewFilm() {
    if(!title) {
      return alert('Digite o titulo do filme.')
    }

    if(newTag) {
      return alert('Clique no "+" para adicionar uma tag, ou deixe o campo vazio.')
    }

    await api.post('/notes', {
      title,
      description,
      tags
    })

    alert('Filme criado com sucesso.')
    navigate('/')
  }

  return (
    <Container>
      <Header />

      <main>
        <Content>
        <Link to="/">
            <FiArrowLeft />
            <span>Voltar</span>
        </Link>

        <h1>Novo filme</h1>

        <div className='input-container'>
          <Input 
            type="text"
            placeholder="Titulo"
            onChange={e => setTitle(e.target.value)}
          />
{/*           <Input 
            type="text"
            placeholder="Sua nota (de 0 a 5)"
          /> */}
        </div>
        
        <TextArea
          type="text"
          placeholder="Observações"
          onChange={e => setDescription(e.target.value)}
        />

        <div className='markers-container'>
          <span>Marcadores</span>
          <div className='markers-wrapper'>
              {
                tags.map((tag, index) => (
                  <Marker
                    key={String(index)} 
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))
              }
              <Marker
                placeholder="Adicionar" 
                isNew
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </div>

        <div className='buttons-container'>
{/*           <ButtonDelete>
            Excluir filme
          </ButtonDelete> */}
          <Button
            type="button"
            title="Salvar alterações"
            onClick={handleNewFilm}
          />
        </div>

        </Content>
      </main>
    </Container>
  )
}