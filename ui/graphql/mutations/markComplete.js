import gql from 'graphql-tag';

const MARK_COMPLETE = gql`
  mutation markComplete($id: String!, $complete: Boolean!) {
    markComplete(id: $id, complete: $complete) {
      id
      text
      isComplete
      isDeleted
    }
  }
`;

export default MARK_COMPLETE;