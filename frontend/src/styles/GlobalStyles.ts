import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #111827;
    padding: 2.5rem 1rem;
    font-family: "Poppins", sans-serif;
  }

  main {
    max-width: 1280px;
    margin: 0 auto;
    /* background-color: blue; */
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
