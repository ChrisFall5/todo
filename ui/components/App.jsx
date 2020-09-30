import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo'
import '../styles/index.scss';
import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

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

ReactDOM.render(<App />, document.getElementById('root'));
