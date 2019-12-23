import gql from 'graphql-tag';

export const GET_MANUFACTURERS = gql`
  query getManufacturers($offset: Int, $perPage: Int) {
    manufacturers(offset: $offset, perPage: $perPage) {
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
