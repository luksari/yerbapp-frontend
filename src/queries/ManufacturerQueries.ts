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
      country,
      createdAt,
      editedAt,
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
