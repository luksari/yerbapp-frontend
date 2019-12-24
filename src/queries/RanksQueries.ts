import gql from 'graphql-tag';

export const GET_RANKS = gql`
   query getRanks($offset: Int, $perPage: Int, $order: String, $orderBy: String) {
    ranks(offset: $offset, perPage: $perPage, order: $order, orderBy: $orderBy) {
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
