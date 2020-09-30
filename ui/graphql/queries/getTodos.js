import gql from 'graphql-tag';

const GET_TODOS = gql`
  query todos {
    todos {
      id
      text
      isComplete
      isDeleted
    }
  }
`;

export default GET_TODOS;