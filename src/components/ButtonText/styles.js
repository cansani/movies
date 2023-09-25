import styled from "styled-components";

export const Container = styled.button`
  max-width: 100%;
  max-height: 100%;

  padding: .2rem .5rem;

  color: ${({ theme }) => theme.COLORS.WHITE};

  background: transparent;
  border: none;

  font-size: ${({ size }) => `${size}rem`}
`