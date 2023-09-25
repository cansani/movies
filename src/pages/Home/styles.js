import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;

`

export const ContainerTitleFilms = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 4.7rem;
  margin-bottom: 4rem;

  h1 {
    font-weight: 400;
  }

  > button {
    width: 22.7rem;
  }
`

export const ContainerFilms = styled.div`
  width: 100%;
  height: 68rem;

  gap: 2.4rem;
  display: flex;
  flex-direction: column;

  overflow-y: auto;
`