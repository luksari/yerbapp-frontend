import gql from 'graphql-tag';

export const GET_TYPES = gql`
  query getTypes($offset: Int, $perPage: Int) {
    type(offset: $offset, perPage: $perPage) {
      id,
      name,
  }
}
`;
