import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    width: 100vw;
    overflow-x: hidden;
  }



  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  p,
  h1,
  h2,
  h3,
  ol,
  ul,
  fieldset,
  input,
  button,
  textarea {
    margin: 0;
    padding: 0;
  }

  ol,
  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  img {
    display: block;
    max-width: 100%;
  }

  body {
    margin: 0;
    /* font-family: sans-serif;  */
    color: black;
    background-color: #f3f3f3;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }


`;
