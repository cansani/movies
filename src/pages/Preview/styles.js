import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`

export const Content = styled.div`
  width: 100%;
  max-height: 59rem;

  display: flex;
  flex-direction: column;
  gap: 4rem;


  .infos-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    a {
      width: 7rem;
  
      color: ${({ theme }) => theme.COLORS.PINK};
  
      display: flex;
      align-items: center;
      gap: .8rem;
    }

    h1 {
      font-size: 3.6rem;
      color: ${({ theme }) => theme.COLORS.FONT_COLOR};
      font-weight: 500;
    }

    > span {
      display: flex;
      align-items: center;
      gap: 2rem;

      .time {
        display: flex;
        align-items: center;
        gap: .5rem;
      }
    }
  }

  .tags-wrapper {
    width: 100%;
    display: flex;
    gap: .8rem;
  }

  > span {
    color: ${({ theme }) => theme.COLORS.FONT_COLOR};
    text-align: justify;
    padding-bottom: 4rem;
  }

  button {
    width: 10%;
  }
`