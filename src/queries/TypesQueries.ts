import gql from 'graphql-tag';

export const GET_TYPES = gql`
    query getTypes($offset: Int, $perPage: Int, $order: String, $orderBy: String) {
    types(offset: $offset, perPage: $perPage, order: $order, orderBy: $orderBy) {
      items {
        id,
        name,
        createdAt,
      }
      total
  }
}
`;

export const GET_TYPE = gql`
  query getType($typeId: ID!) {
    type(typeId: $typeId) {
      id,
      name,
      createdAt,
    }
  }
`;

export const ADD_TYPE = gql`
  mutation addType($type: AddTypeInput!) {
    addType(type: $type) {
      id,
      name,
    }
  }
`;


export const EDIT_TYPE = gql`
  mutation editType($typeId: ID!, $type: EditTypeInput!) {
    editType(typeId: $typeId, type: $type) {
      id,
      name,
    }
  }
`;

export const DELETE_TYPE = gql`
  mutation deleteType($typeId: ID!) {
    deleteType(typeId: $typeId)
  }
`;
