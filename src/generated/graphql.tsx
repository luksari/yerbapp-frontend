import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type AddManufacturerInput = {
  name: Scalars['String'],
  country: Scalars['String'],
  photoUrl?: Maybe<Scalars['String']>,
  creatorId: Scalars['ID'],
};

export type AddProductInput = {
  manufacturerId: Scalars['ID'],
  typeId: Scalars['ID'],
  name: Scalars['String'],
  details: Scalars['String'],
  photoUrl?: Maybe<Scalars['String']>,
};

export type AddRankInput = {
  name: Scalars['String'],
  lowerRange: Scalars['Int'],
  upperRange: Scalars['Int'],
};

export type AddReviewInput = {
  aroma?: Maybe<Scalars['Int']>,
  taste?: Maybe<Scalars['Int']>,
  bitterness?: Maybe<Scalars['Int']>,
  energy?: Maybe<Scalars['Int']>,
  price?: Maybe<Scalars['Int']>,
  overall?: Maybe<Scalars['Int']>,
  description: Scalars['String'],
  authorId: Scalars['ID'],
  productId: Scalars['ID'],
};

export type AddTypeInput = {
  name: Scalars['String'],
};

export type EditManufacturerInput = {
  name?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['String']>,
  photoUrl?: Maybe<Scalars['String']>,
};

export type EditProductInput = {
  name?: Maybe<Scalars['String']>,
  details?: Maybe<Scalars['String']>,
  photoUrl?: Maybe<Scalars['String']>,
};

export type EditRankInput = {
  name?: Maybe<Scalars['String']>,
  lowerRange?: Maybe<Scalars['Int']>,
  upperRange?: Maybe<Scalars['Int']>,
};

export type EditReviewInput = {
  aroma?: Maybe<Scalars['Int']>,
  taste?: Maybe<Scalars['Int']>,
  bitterness?: Maybe<Scalars['Int']>,
  energy?: Maybe<Scalars['Int']>,
  price?: Maybe<Scalars['Int']>,
  overall?: Maybe<Scalars['Int']>,
  description: Scalars['String'],
};

export type EditTypeInput = {
  name: Scalars['String'],
};

export type EditUserInput = {
  country?: Maybe<Scalars['String']>,
  photoUrl?: Maybe<Scalars['String']>,
  aromaImportance?: Maybe<Scalars['Int']>,
  tasteImportance?: Maybe<Scalars['Int']>,
  bitternessImportance?: Maybe<Scalars['Int']>,
  priceImportance?: Maybe<Scalars['Int']>,
  energyImportance?: Maybe<Scalars['Int']>,
  overallImportance?: Maybe<Scalars['Int']>,
};

export type Manufacturer = {
   __typename?: 'Manufacturer',
  id: Scalars['ID'],
  name: Scalars['String'],
  country: Scalars['String'],
  photoUrl?: Maybe<Scalars['String']>,
  products?: Maybe<Array<Product>>,
  editedAt: Scalars['String'],
  addedAt: Scalars['String'],
};

export type Mutation = {
   __typename?: 'Mutation',
  editUser: User,
  assignAdmin: User,
  revokeAdmin: User,
  deleteUser: Scalars['Boolean'],
  addReview: Review,
  editReview: Review,
  deleteReview: Scalars['Boolean'],
  addType: ProductType,
  editType: ProductType,
  deleteType: Scalars['Boolean'],
  addProduct: Product,
  editProduct: Product,
  deleteProduct: Scalars['Boolean'],
  addManufacturer: Manufacturer,
  editManufacturer: Manufacturer,
  deleteManufacturer: Scalars['Boolean'],
  addRank: Rank,
  editRank: Rank,
  deleteRank: Scalars['Boolean'],
};


export type MutationEditUserArgs = {
  user: EditUserInput,
  userId: Scalars['ID']
};


export type MutationAssignAdminArgs = {
  userId: Scalars['ID']
};


export type MutationRevokeAdminArgs = {
  userId: Scalars['ID']
};


export type MutationDeleteUserArgs = {
  userId: Scalars['ID']
};


export type MutationAddReviewArgs = {
  review: AddReviewInput
};


export type MutationEditReviewArgs = {
  review: EditReviewInput,
  reviewId: Scalars['ID']
};


export type MutationDeleteReviewArgs = {
  reviewId: Scalars['ID']
};


export type MutationAddTypeArgs = {
  type: AddTypeInput
};


export type MutationEditTypeArgs = {
  type: EditTypeInput,
  typeId: Scalars['ID']
};


export type MutationDeleteTypeArgs = {
  typeId: Scalars['ID']
};


export type MutationAddProductArgs = {
  product: AddProductInput
};


export type MutationEditProductArgs = {
  product: EditProductInput,
  productId: Scalars['ID']
};


export type MutationDeleteProductArgs = {
  productId: Scalars['ID']
};


export type MutationAddManufacturerArgs = {
  manufacturer: AddManufacturerInput
};


export type MutationEditManufacturerArgs = {
  manufacturer: EditManufacturerInput,
  manufacturerId: Scalars['ID']
};


export type MutationDeleteManufacturerArgs = {
  manufacturerId: Scalars['ID']
};


export type MutationAddRankArgs = {
  rank: AddRankInput
};


export type MutationEditRankArgs = {
  rank: EditRankInput,
  rankId: Scalars['ID']
};


export type MutationDeleteRankArgs = {
  rankId: Scalars['ID']
};

export type Product = {
   __typename?: 'Product',
  id: Scalars['ID'],
  manufacturer: Manufacturer,
  type: ProductType,
  reviews?: Maybe<Array<Review>>,
  name: Scalars['String'],
  details: Scalars['String'],
  photoUrl?: Maybe<Scalars['String']>,
  addedAt: Scalars['String'],
};

export type ProductType = {
   __typename?: 'ProductType',
  id: Scalars['ID'],
  name: Scalars['String'],
  addedAt: Scalars['String'],
};

export type Profile = {
   __typename?: 'Profile',
  id: Scalars['ID'],
  aromaImportance: Scalars['Int'],
  tasteImportance: Scalars['Int'],
  bitternessImportance: Scalars['Int'],
  priceImportance: Scalars['Int'],
  energyImportance: Scalars['Int'],
  overallImportance: Scalars['Int'],
  editedAt: Scalars['String'],
  createdAt: Scalars['String'],
};

export type Query = {
   __typename?: 'Query',
  user: User,
  whoAmI: User,
  users: Array<User>,
  review: Review,
  reviews: Array<Review>,
  types: Array<ProductType>,
  type: ProductType,
  products: Array<Product>,
  product: Product,
  manufacturers: Array<Manufacturer>,
  manufacturer: Manufacturer,
  ranks: Array<Rank>,
  rank: Rank,
};


export type QueryUserArgs = {
  userId: Scalars['ID']
};


export type QueryReviewArgs = {
  reviewId: Scalars['ID']
};


export type QueryTypeArgs = {
  typeId: Scalars['ID']
};


export type QueryProductArgs = {
  productId: Scalars['ID']
};


export type QueryManufacturerArgs = {
  manufacturerId: Scalars['ID']
};


export type QueryRankArgs = {
  rankId: Scalars['ID']
};

export type Rank = {
   __typename?: 'Rank',
  id: Scalars['ID'],
  name: Scalars['String'],
  lowerRange: Scalars['Int'],
  upperRange: Scalars['Int'],
  addedAt: Scalars['String'],
};

export type Review = {
   __typename?: 'Review',
  id: Scalars['ID'],
  aroma: Scalars['Int'],
  taste: Scalars['Int'],
  bitterness: Scalars['Int'],
  energy: Scalars['Int'],
  price: Scalars['Int'],
  overall: Scalars['Int'],
  description: Scalars['String'],
  product: Product,
  author: User,
  editedAt: Scalars['String'],
  addedAt: Scalars['String'],
};

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  profile: Profile,
  username: Scalars['String'],
  email: Scalars['String'],
  country: Scalars['String'],
  avatarUrl: Scalars['String'],
  role: Scalars['String'],
  reviews?: Maybe<Array<Review>>,
  createdAt: Scalars['String'],
};

export type UserQueryVariables = {
  userId: Scalars['ID']
};


export type UserQuery = (
  { __typename?: 'Query' }
  & { user: (
    { __typename?: 'User' }
    & Pick<User, 'username'>
  ) }
);


export const UserDocument = gql`
    query User($userId: ID!) {
  user(userId: $userId) {
    username
  }
}
    `;
export type UserComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<UserQuery, UserQueryVariables>, 'query'> & ({ variables: UserQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const UserComponent = (props: UserComponentProps) => (
      <ApolloReactComponents.Query<UserQuery, UserQueryVariables> query={UserDocument} {...props} />
    );
    
export type UserProps<TChildProps = {}> = ApolloReactHoc.DataProps<UserQuery, UserQueryVariables> & TChildProps;
export function withUser<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UserQuery,
  UserQueryVariables,
  UserProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, UserQuery, UserQueryVariables, UserProps<TChildProps>>(UserDocument, {
      alias: 'user',
      ...operationOptions
    });
};

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserQuery, UserQueryVariables>) {
        return ApolloReactHooks.useQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
      }
export function useUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = ApolloReactCommon.QueryResult<UserQuery, UserQueryVariables>;