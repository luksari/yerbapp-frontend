import gql from 'graphql-tag';

export const GET_MANUFACTURERS = gql`
    query getManufacturers($offset: Int, $perPage: Int, $order: String, $orderBy: String) {
    manufacturers(offset: $offset, perPage: $perPage, order: $order, orderBy: $orderBy) {
      items {
        id,
        name,
        country,
        photoUrl,
        editedAt,
        createdAt,
      }
      total
  }
}
`;
