import gql from 'graphql-tag';

const GET_DELETED_TODOS = gql`
  query getDeletedTodos {
    getDeletedTodos {
      id
      text
      isComplete
      isDeleted
    }
  }
`;

export default GET_DELETED_TODOS;