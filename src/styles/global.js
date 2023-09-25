import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Poppins', sans-serif;

    outline: none;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    color: ${({ theme }) => theme.COLORS.WHITE};
    -webkit-font-smoothing: antialiased;

    ::-webkit-scrollbar {
      width: 1.2rem;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.PINK};
      border-radius: 2rem;
      border: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND};
    }
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter .25s;
  }

  button:hover, a:hover {
    filter: brightness(.8);
  }

  main {
    width: 100%;
    padding: 0 12.3rem;
  }
`