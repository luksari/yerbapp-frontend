import { gql } from 'apollo-boost';

export const GET_ME = gql`
  query getMe {
    whoAmI{
      username,
      email
    }
  }
`;


export const GET_ME_ROLE = gql`
  query getMeRole {
    whoAmI{
      role
    }
  }
`;

export const GET_ME_DETAILS = gql`
  query getMeDetails {
    whoAmI {
      id,
      username,
      email,
      role,
      profile {
        aromaImportance,
        tasteImportance,
        bitternessImportance,
        priceImportance,
        energyImportance,
        overallImportance
      }
    }
  }
`;

export const UPDATE_USER = gql`
   mutation editUser($user: EditUserInput!, $userId: ID!) {
    editUser(user: $user, userId: $userId) {
      id,
      username,
      email,
      role,
      profile {
        tasteImportance,
        aromaImportance,
        bitternessImportance,
        priceImportance,
        energyImportance,
        overallImportance
      },
    }
  }
`;

export const GET_USERS = gql`
  query getUsers($offset: Int, $perPage: Int, $order: String, $orderBy: String) {
    users(offset: $offset, perPage: $perPage, order: $order, orderBy: $orderBy) {
      items {
        id,
        username,
        email,
        role,
      }
      total
  }
}
`;
