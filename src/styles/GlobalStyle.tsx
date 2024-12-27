import { createGlobalStyle } from 'styled-components';
import 'pretendard/dist/web/static/pretendard.css';

const GlobalStyle = createGlobalStyle`
/* Reset CSS */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  body {
    font-family: 'Pretendard', sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    line-height: 1.2;
    margin: 0;
  }

  p {
    margin: 0;
  }

  ul, ol {
    margin: 0 ;
    padding: 0;
    list-style: none;
  }
`;

export default GlobalStyle;