import { Container, Content, TextArea, ButtonDelete } from './styles'

import { Link } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Marker } from '../../components/Marker'

import { FiArrowLeft } from 'react-icons/fi'

export function Create() {
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
          />
          <Input 
            type="text"
            placeholder="Sua nota (de 0 a 5)"
          />
        </div>
        
        <TextArea
          placeholder="Observações"
        />

        <div className='markers-container'>
          <span>Marcadores</span>
          <div className='markers-wrapper'>
              <Marker 
                value="React"
              />
              <Marker
                placeholder="Adicionar" 
                isNew
              />
            </div>
          </div>

        <div className='buttons-container'>
          <ButtonDelete>
            Excluir filme
          </ButtonDelete>
          <Button
            title="Salvar alterações"
          />
        </div>

        </Content>
      </main>
    </Container>
  )
}