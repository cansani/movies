import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 5.6rem;

  padding: 0rem 2.4rem;

  border-radius: .8rem;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  background-color: ${({ theme }) => theme.COLORS.INPUT};

  svg {
    color: ${({ theme }) => theme.COLORS.TEXT_INPUT};
  }

  input {
    width: 100%;
    height: 100%;

    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};

    background: transparent;
    border: none;

  }
`