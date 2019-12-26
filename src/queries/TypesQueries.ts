import gql from 'graphql-tag';

export const GET_TYPES = gql`
    query getTypes($offset: Int, $perPage: Int, $order: String, $orderBy: String) {
    types(offset: $offset, perPage: $perPage, order: $order, orderBy: $orderBy) {
      items {
        id,
        name,
      }
      total
  }
}
`;
