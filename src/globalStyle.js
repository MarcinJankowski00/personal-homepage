import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-size: 20px;
    letter-spacing: 0.07em;
    background-color: ${({ theme }) => theme.color.appbackground};
    color: ${({ theme }) => theme.color.font};
    justify-content: center;
    margin: 0;
    padding: 0; 
    transition: 0.3s;
  }

  html {
  box-sizing: border-box;
}

*,
::before,
::after {
  box-sizing: inherit;
}
`;