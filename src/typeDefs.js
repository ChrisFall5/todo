import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Todo {
    id: ID!
    text: String!
    isComplete: Boolean!
    isDeleted: Boolean!
  }

  type Query {
    todos: [Todo!]!
    getTodo(id: String!): Todo!
  }

  type Mutation {
    createTodo(text: String!): Todo!
    markComplete(id: String!, complete: Boolean!): Todo!
    deleteTodo(id: String!): Todo!
  }
`;