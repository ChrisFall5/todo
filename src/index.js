import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

import { resolvers } from './resolvers.js';
import { typeDefs } from './typeDefs.js';

const startServer = async () => {
  const app = express();
  
  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  await server.start();

  app.use(
    cors(),
    bodyParser.json(),
    expressMiddleware(server)
  );

  await mongoose.connect('mongodb://127.0.0.1:27017/todo');
  
  app.listen({ port: 4000 }, () => {
    console.log('Server ready at http://localhost:4000/graphql');
  });
}

startServer();
