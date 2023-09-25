import { Container } from './styles'

export function ButtonText({ title, size, ...rest }) {
  return (
    <Container size={size} {...rest}>
      {title}
    </Container>
  )
}