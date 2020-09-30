import gql from 'graphql-tag';

const CREATE_TODO = gql`
  mutation createTodo($text: String!) {
    createTodo(text: $text) {
      id
      text
      isComplete
      isDeleted
    }
  }
`;

export default CREATE_TODO;