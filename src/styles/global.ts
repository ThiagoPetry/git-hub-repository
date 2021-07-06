import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-size: border-box;
  }

  body {
    background-color: #f4f4f4;
    -webkit-font-smoothing: antialiased;
    cursor: default;
  }

  body {
    font: 2em Roboto, sans-serif;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }

  ::placeholder {
    font-size: 1.4em;
    font-weight: bold;
    color: #858585;
  }

`;
