// /frontend/src/styles/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
  }

  .react-flow__node {
    font-size: 12px;
    background: #fff;
    border: 1px solid #555;
    border-radius: 5px;
    text-align: center;
  }

  .react-flow__handle {
    width: 8px;
    height: 8px;
    background-color: #555;
  }
`;

export default GlobalStyle;