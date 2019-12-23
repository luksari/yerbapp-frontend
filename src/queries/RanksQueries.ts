import gql from 'graphql-tag';

export const GET_RANKS = gql`
  query getRanks {
    ranks {
      items {
        id,
        name,
        lowerRange,
        upperRange,
      }
      total
  }
}
`;
