import gql from 'graphql-tag';

const DELETE_TODO = gql`
  mutation deleteTodo($id: String!) {
    deleteTodo(id: $id) {
      id
      text
      isComplete
      isDeleted
    }
  }
`;

export default DELETE_TODO;