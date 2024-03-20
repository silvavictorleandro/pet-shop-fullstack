import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #f7f7f7;
    font-family: "Poppins", sans-serif;

    @media (max-width: 550px) {
      background-color: white;
    }
  }

  button {
    cursor: pointer;
    transition: filter .2s;

    &:hover {
      filter: brightness(1.2);
      transition: filter .2s;
    }
  }
`;
