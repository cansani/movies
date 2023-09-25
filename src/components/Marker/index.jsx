import { Container } from './styles'

import { FiPlus, FiX } from 'react-icons/fi' 

export function Marker({ isNew, value, onClick, ...rest }) {
  return (
    <Container isNew={isNew} >
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
      />

      <button
        type="button"
        onClick={onClick}
      >
        { isNew ? <FiPlus size={15}/> : <FiX size={15} />}
      </button>
    </Container>
  )
}