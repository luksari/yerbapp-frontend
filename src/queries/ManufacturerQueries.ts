import gql from 'graphql-tag';

export const GET_MANUFACTURERS = gql`
  query getManufacturers($offset: Int, $perPage: Int) {
    manufacturers(offset: $offset, perPage: $perPage) {
      id,
      name,
      country,
      photoUrl,
      editedAt,
      addedAt,
  }
}
`;

export const GET_MANUFACTURER = gql`
  query getManufacturer($manufacturerId: ID!) {
    manufacturer(manufacturerId: $manufacturerId) {
      id,
      name,
      country,
      photoUrl,
    }
  }
`;

export const ADD_MANUFACTURER = gql`
  mutation addManufacturer($manufacturer: AddManufacturerInput!) {
    addManufacturer(manufacturer: $manufacturer) {
      id,
      name,
    }
  }
`;


export const EDIT_MANUFACTURER = gql`
  mutation editManufacturer($manufacturerId: ID!, $manufacturer: EditManufacturerInput!) {
    editManufacturer(manufacturerId: $manufacturerId, manufacturer: $manufacturer) {
      id,
      name,
    }
  }
`;
