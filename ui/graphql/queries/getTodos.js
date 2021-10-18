import gql from 'graphql-tag';

const GET_TODOS = gql`
  query getTodos {
    getTodos {
      id
      text
      isComplete
      isDeleted
    }
  }
`;

export default GET_TODOS;