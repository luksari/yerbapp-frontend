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
        aromaAverage,
        tasteAverage,
        bitternessAverage,
        energyAverage,
        priceAverage,
        details,
        overallAverage,
      }
    }
  }
`;
export const GET_PRODUCT = gql`
  query getProduct($productId: ID!) {
    product(productId: $productId) {
      id,
      name,
      manufacturer {
        id,
        name,
      }
      type {
        id,
        name,
      }
      details,
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation addProduct($product: AddProductInput!) {
    addProduct(product: $product) {
      id,
      name,
      manufacturer {
        id,
        name,
      }
      type {
        id,
        name,
      }
      details,
      createdAt,
    }
  }
`;


export const EDIT_PRODUCT = gql`
  mutation editProduct($productId: ID!, $product: EditProductInput!) {
    editProduct(productId: $productId, product: $product) {
      id,
      name,
      manufacturer {
        id,
        name,
      }
      type {
        id,
        name,
      }
      details,
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation deleteProduct($productId: ID!) {
    deleteProduct(productId: $productId)
  }
`;
