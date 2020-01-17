import gql from 'graphql-tag';

export const GET_REVIEWS = gql`
  query getReviewsBy($productId: ID!) {
    product(productId: $productId) {
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

export const ADD_REVIEW = gql`
  mutation addReview($review: AddReviewInput!) {
    addReview(review: $review) {
      id,
    }
  }
`;

export const REMOVE_REVIEW = gql``;

export const EDIT_REVIEW = gql``;
