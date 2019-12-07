import gql from 'graphql-tag';

export const GET_USER_DETAILS = gql`
  query User($userId:  ID!) {
    user(userId: $userId) {
      username,
    }
  }
`;
