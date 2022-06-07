import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }

  .button-primary {
    background: ${({theme}) => theme.backgroudButton};
    color: ${({theme}) => theme.colorButton};
    border: ${({theme}) => theme.colorButton};
  }

  .button-secondary {
    background: ${({theme}) => theme.backgroudButton};
    color: ${({theme}) => theme.colorButton};
    border: ${({theme}) => theme.colorButton};
  }

  .button {
    padding: .7rem 1rem;
    font-size: 1rem;
    border-radius: 4px
  }

  .navlinks {
    color: ${({theme}) => theme.text}
  }

  .auth {
    color: ${({theme}) => theme.body}
  }

  .hero-text {
    color: ${({theme}) => theme.textSecondary}
  }

  .header-section {
    background-color: ${({theme}) => theme.body}
  }

  a {
    color: ${({theme}) => theme.text}
  }

  p {
    color: ${({theme}) => theme.paragraph}
    opacity: .8
  }










  `;
