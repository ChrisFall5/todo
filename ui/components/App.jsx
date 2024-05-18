import React from 'react';
import { createRoot } from 'react-dom/client';
import Todo from './Todo'
import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider } from '@apollo/client';

import '../styles/index.scss';

const App = () => {
  const link = new HttpLink({
    uri: 'http://localhost:4000/graphql',
  });

  const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client = {client}>
      <Todo />
    </ApolloProvider>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
