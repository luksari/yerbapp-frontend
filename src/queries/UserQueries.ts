import { gql } from 'apollo-boost';

export const GET_ME = gql`
  query getMe {
    whoAmI{
      username,
      email
    }
  }
`;

export const GET_ME_DETAILS = gql`
  query getMeDetails {
    whoAmI {
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
