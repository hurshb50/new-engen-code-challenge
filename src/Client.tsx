import React, { FunctionComponent } from 'react';
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";

const cache = new InMemoryCache();
const link = new HttpLink({ uri: "https://colourlovers-graphql-api.herokuapp.com/graphql" });
const client = new ApolloClient({ cache, link });

const Client: FunctionComponent = (props) => {
  return (
    <ApolloProvider client={client}>
      {props.children}
    </ApolloProvider>
  );
};

export default Client;