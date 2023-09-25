import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  width: 100%;
  max-height: 78rem;
  overflow-y: scroll;

  a {
    width: 7rem;

    color: ${({ theme }) => theme.COLORS.PINK};

    display: flex;
    align-items: center;
    gap: .8rem;
  }

  h1 {
    font-weight: 400;
    font-size: 3.6rem;
    color: ${({ theme }) => theme.COLORS.FONT_COLOR};
  }

  .input-container {
    display: flex;
    gap: 4rem;
  }

  .markers-container {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    span {
      color: ${({ theme }) => theme.COLORS.P_COLOR};
      font-size: 2rem;
    }

    .markers-wrapper {
      width: 100%;
      height: 9rem;

      padding: 1.6rem;

      background-color: ${({ theme }) => theme.COLORS.MARKERS_BACKGROUND};
      border-radius: .8rem;

      display: flex;
      gap: 2.4rem;
    }
  }

  .buttons-container {
    width: 100%;

    display: flex;
    align-items: center;
    gap: 4rem;

    margin-bottom: 9rem;
  }
`

export const TextArea = styled.textarea`
  width: 100%;
  height: 27rem;

  padding: 1.9rem 2.4rem;

  background-color: ${({ theme }) => theme.COLORS.INPUT};
  border-radius: .8rem;

  resize: none;
  border: none;
  
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 1.4rem;
`

export const ButtonDelete = styled.button`
  width: 100%;
  padding: 1.6rem 3.2rem;
  height: 4.8rem;
  background-color: ${({ theme }) => theme.COLORS.MARKERS_BACKGROUND};
  color: ${({ theme }) => theme.COLORS.PINK};
  border: none;
  cursor: pointer;
  border-radius: .8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.53rem;
`