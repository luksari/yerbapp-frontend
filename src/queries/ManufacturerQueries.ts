import gql from 'graphql-tag';

export const GET_MANUFACTURERS = gql`
  query getManufacturers {
    manufacturers {
      id,
      name,
      country,
      photoUrl,
      editedAt,
      addedAt,
  }
}
`;
