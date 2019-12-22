import gql from 'graphql-tag';

export const GET_RANKS = gql`
  query getRanks {
    ranks {
      id,
      name,
      lowerRange,
      upperRange,
  }
}
`;
