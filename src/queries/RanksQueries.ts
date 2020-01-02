import gql from 'graphql-tag';

export const GET_RANKS = gql`
   query getRanks($offset: Int, $perPage: Int, $order: String, $orderBy: String) {
    ranks(offset: $offset, perPage: $perPage, order: $order, orderBy: $orderBy) {
      items {
        id,
        name,
        lowerRange,
        upperRange,
      }
      total
  }
}
`;

export const GET_RANK = gql`
  query getRank($rankId: ID!) {
    rank(rankId: $rankId) {
      id,
      name,
      lowerRange,
      upperRange,
    }
  }
`;

export const ADD_RANK = gql`
  mutation addRank($rank: AddRankInput!) {
    addRank(rank: $rank) {
      id,
      name,
      lowerRange,
      upperRange,
      createdAt,
    }
  }
`;


export const EDIT_RANK = gql`
  mutation editRank($rankId: ID!, $rank: EditRankInput!) {
    editRank(rankId: $rankId, rank: $rank) {
      id,
      name,
      lowerRange,
      upperRange,
    }
  }
`;

export const DELETE_RANK = gql`
  mutation deleteRank($rankId: ID!) {
    deleteRank(rankId: $rankId)
  }
`;
