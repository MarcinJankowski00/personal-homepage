import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
    font-size: 20px;
    letter-spacing: 0.05em;
    background-color: ${({ theme }) => theme.color.appbackground};
    color: ${({ theme }) => theme.color.font};
    justify-content: center;
    margin: 0;
    padding: 0; 
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