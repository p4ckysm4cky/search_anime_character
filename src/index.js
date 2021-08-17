import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache
} from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://graphql.anilist.co"
  })
})


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
  </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

