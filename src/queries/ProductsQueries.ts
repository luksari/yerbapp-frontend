import gql from 'graphql-tag';

export const GET_PRODUCTS = gql`
    query getProducts($offset: Int, $perPage: Int, $personalizeForUser: ID, $searchByName: String) {
    products(offset: $offset, perPage: $perPage, personalizeForUser: $personalizeForUser, searchByName: $searchByName)
   {
      total,
      items {
        id,
        name,
        manufacturer {
          id,
          name,
          country
        },
        type {
          id,
          name
        },
        author {
          id,
          username
        },
        aromaAverage,
        tasteAverage,
        bitternessAverage,
        energyAverage,
        priceAverage,
        details,
        overallAverage,
        photoUrl,
        personalizedScore
      }
    }
  }
`;
export const GET_PRODUCT = gql`
  query getProduct($productId: ID!) {
    product(productId: $productId) {
      id,
      name,
      details,
      photoUrl,
      manufacturer {
        id,
        name
      }
      type {
        id,
        name
      }

    }
  }
`;
export const GET_PRODUCT_DETAILS = gql`
  query getProductDetails($productId: ID!) {
    product(productId: $productId) {
      id,
      name,
      details,
      photoUrl,
      manufacturer {
        name
      },
      type {
        name
      },
      reviews {
        id,
        description,
        aroma,
        taste,
        bitterness,
        energy,
        price,
        overall,
          author {
            id,
            username,
            avatarUrl
          }
        editedAt,
        createdAt
      }
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
