import styled from "styled-components";

export const Container = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: .5rem 1.6rem;

  border-radius: .8rem;

  background-color: ${({ theme }) => theme.COLORS.TAG_BACKGROUND};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 1.4rem;
`