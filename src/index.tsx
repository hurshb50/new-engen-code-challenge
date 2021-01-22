import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from "styled-components";
import App from './App';
import Client from './api/Client';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
    font-family: 'Source Sans Pro', sans-serif;
    background-color: #EFEFEF;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Client>
      <GlobalStyle />
      <App />
    </Client>
  </React.StrictMode>,
  document.getElementById('root')
);
