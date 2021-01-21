import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";
import { createGlobalStyle } from "styled-components";

import App from './App';

const cache = new InMemoryCache();
const link = new HttpLink({ uri: "https://colourlovers-graphql-api.herokuapp.com/graphql" });
const client = new ApolloClient({ cache, link });


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
    <ApolloProvider client={client}>
      <GlobalStyle />
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
