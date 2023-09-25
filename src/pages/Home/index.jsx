import { Container, ContainerTitleFilms, ContainerFilms } from './styles'

import { Link } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { CardFilm } from '../../components/CardFilm'

import { AiOutlinePlus } from 'react-icons/ai'

export function Home() {
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
          <CardFilm to="/preview/1"
            data={{
              title: 'Interestellar',
              description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
              tags: [
                {id: '1', name: 'Ficção científica'},
                {id: '2', name: 'Drama'},
                {id: '3', name: 'Familia'}
              ]
            }}
          />
        </ContainerFilms>
      </main>
    </Container>
  )
}

