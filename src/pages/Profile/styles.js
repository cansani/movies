import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 14.4rem;
    background-color: ${({ theme }) => theme.COLORS.CARD_BACKGROUND};

    display: flex;
    align-items: center;

    padding: 0 12.4rem;

    a {
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.COLORS.PINK};
      gap: .8rem;
    }

    svg {
      font-size: 2.4rem;
    }
  }
`

export const Form = styled.form`
  max-width: 34rem;
  margin: 3rem auto 0;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: .8rem;
  }
`

export const Avatar = styled.div`
  position: relative;

  margin: -12.4rem auto 3.2rem;

  width: 18.6rem;
  height: 18.6rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;  
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;
    
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: .7rem;
    right: .7rem;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND};
    }
  }

`