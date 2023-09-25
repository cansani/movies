import styled from "styled-components";

export const Container = styled.div`
  padding: 1.6rem;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.MARKER_BACKGROUND};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.TEXT_INPUT}` : "none"};

  display: flex;
  align-items: center;
  gap: 1.6rem;

  border-radius: .8rem;

  > button {
    border: none;
    background: transparent;

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  > input {
    width: 100%;
    height: 5.6rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.TEXT_INPUT};
    }
  }
`