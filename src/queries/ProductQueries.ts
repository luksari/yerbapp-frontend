import gql from 'graphql-tag';

export const GET_PRODUCTS = gql`
    query getProducts($offset: Int, $perPage: Int, $order: String, $orderBy: String) {
    products(offset: $offset, perPage: $perPage, order: $order, orderBy: $orderBy)
   {
      total,
      items {
        id,
        name,
        manufacturer {
          name,
          country
        },
        type {
          name
        },
        details

      }
    }
  }
`;
