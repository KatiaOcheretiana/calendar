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
  background-color: rgb(236, 237, 237);

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  #root{
    height: 100vh;
    display: flex;
    justify-content: center;
    position: relative;
  }



 ::-webkit-scrollbar {
    padding-left: 50px;
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgb(93, 137, 220);
    border-radius: 4px;

    ::-webkit-scrollbar-thumb:hover {
      background: rgb(115, 130, 241);
    }

    ::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.1);
      border-radius: 2px;
    }
  }
`;
