import styled, { createGlobalStyle } from "styled-components";

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

  #root{
    height: 100vh;
      display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  }
`;

export const Container = styled.div`
  @media screen and (min-width: 320px) {
    width: 100%;
    padding: 0 20px;
    margin: 90px auto;
  }

  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1184px;
    padding: 0 132px;
    margin: 150px auto 100px auto;
  }
`;
