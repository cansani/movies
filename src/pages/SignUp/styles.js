import styled from "styled-components"; 

import bgImg from '../../assets/bg_img.png'

export const Container = styled.div`
  height: 100vh;
  
  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 12.3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    > h1 {
      font-size: 4.8rem;
      color: ${({ theme }) => theme.COLORS.PINK};
    }

    > span {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.SIGN_P};
    }
  }

  h2 {
    margin: 2.8rem 0;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.FONT_COLOR};
  }

  .input-wrapper {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: .8rem;

    margin-bottom: 2.4rem;
  }

  .btnBack {
    margin-top: 4.2rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.4rem;
  }

  .btnLinkBack {
    margin-top: 4.2rem;

    display: flex;
    align-items: center;
    gap: .8rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.4rem;


  }

`

export const Background = styled.div`
  flex: 1;
  background: url(${bgImg}) no-repeat center center;
  background-size: cover;
`