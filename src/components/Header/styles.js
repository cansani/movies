import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 11.6rem;
  
  padding: 2.4rem 12.3rem;

  display: flex;
  align-items: center;
  gap: 6.4rem;

  border-bottom: .2rem solid #262529;

  > a > h1 {
    font-weight: 500;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

`

export const Profile = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  .text-wrapper {
    > span {
      width: 100%;
      font-size: 1.4rem;
    }

    button {
      color: #948F99;
    }

    display: flex;
    flex-direction: column;
  }

  > a > img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
  }
`