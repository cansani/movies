import styled from "styled-components";

import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  border: none;

  width: 100%;
  /* height: 22.2rem; */

  padding: 3.2rem;
  
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  background-color: ${({ theme }) => theme.COLORS.CARD_BACKGROUND};
  border-radius: .8rem;

  h1 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.FONT_COLOR};
    font-weight: 400;
  }

  p {
    text-align: start;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.P_COLOR};
  }
`

export const ContainerTags = styled.div`
  display: flex;
  align-items: center;
  gap: .8rem;
`