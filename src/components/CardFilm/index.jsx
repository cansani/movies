import { Container, ContainerTags } from './styles'

import { Tag } from '../Tag'

export function CardFilm({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <p>{data.description}</p>

      {
        data.tags &&
        <ContainerTags>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </ContainerTags>
      }

    </Container>
  )
}