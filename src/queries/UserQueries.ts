import { gql } from 'apollo-boost';

export const GET_USER = gql`
  query getUser($userId:  ID!) {
    user(userId: $userId) {
      username
    }
  }
`;
