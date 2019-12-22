import gql from 'graphql-tag';

export const GET_TYPES = gql`
  query getTypes {
    types {
      id,
      name,
  }
}
`;
