import styled from 'styled-components'


export const Container = styled.button`
  width: 100%;
  padding: 1.6rem 3.2rem;
  height: 4.8rem;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  border: none;
  cursor: pointer;
  border-radius: .8rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;

  font-size: 1.53rem;

  font-weight: 500;
`