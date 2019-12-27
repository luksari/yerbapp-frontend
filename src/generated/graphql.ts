import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
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
  createdAt: Scalars['String'],
};

export type ManufacturersResponse = {
   __typename?: 'ManufacturersResponse',
  items: Array<Manufacturer>,
  total: Scalars['Int'],
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
  createdAt: Scalars['String'],
};

export type ProductsResponse = {
   __typename?: 'ProductsResponse',
  items: Array<Product>,
  total: Scalars['Int'],
};

export type ProductType = {
   __typename?: 'ProductType',
  id: Scalars['ID'],
  name: Scalars['String'],
  createdAt: Scalars['String'],
};

export type Profile = {
   __typename?: 'Profile',
  id: Scalars['ID'],
  rank: Rank,
  experiencePoints: Scalars['Int'],
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
  users: UsersResponse,
  review: Review,
  reviews: ReviewsResponse,
  types: TypesResponse,
  type: ProductType,
  products: ProductsResponse,
  product: Product,
  manufacturers: ManufacturersResponse,
  manufacturer: Manufacturer,
  ranks: RanksResponse,
  rank: Rank,
};


export type QueryUserArgs = {
  userId: Scalars['ID']
};


export type QueryUsersArgs = {
  order?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Scalars['String']>,
  perPage?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryReviewArgs = {
  reviewId: Scalars['ID']
};


export type QueryReviewsArgs = {
  order?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Scalars['String']>,
  perPage?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryTypesArgs = {
  order?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Scalars['String']>,
  perPage?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryTypeArgs = {
  typeId: Scalars['ID']
};


export type QueryProductsArgs = {
  order?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Scalars['String']>,
  perPage?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryProductArgs = {
  productId: Scalars['ID']
};


export type QueryManufacturersArgs = {
  order?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Scalars['String']>,
  perPage?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryManufacturerArgs = {
  manufacturerId: Scalars['ID']
};


export type QueryRanksArgs = {
  order?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Scalars['String']>,
  perPage?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
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
  createdAt: Scalars['String'],
};

export type RanksResponse = {
   __typename?: 'RanksResponse',
  items: Array<Rank>,
  total: Scalars['Int'],
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
  createdAt: Scalars['String'],
};

export type ReviewsResponse = {
   __typename?: 'ReviewsResponse',
  items: Array<Review>,
  total: Scalars['Int'],
};

export type TypesResponse = {
   __typename?: 'TypesResponse',
  items: Array<ProductType>,
  total: Scalars['Int'],
};

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  profile: Profile,
  username: Scalars['String'],
  email: Scalars['String'],
  country?: Maybe<Scalars['String']>,
  avatarUrl: Scalars['String'],
  role: Scalars['String'],
  reviews?: Maybe<Array<Review>>,
  createdAt: Scalars['String'],
};

export type UsersResponse = {
   __typename?: 'UsersResponse',
  items: Array<User>,
  total: Scalars['Int'],
};

export type GetManufacturersQueryVariables = {
  offset?: Maybe<Scalars['Int']>,
  perPage?: Maybe<Scalars['Int']>,
  order?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Scalars['String']>
};


export type GetManufacturersQuery = (
  { __typename?: 'Query' }
  & { manufacturers: (
    { __typename?: 'ManufacturersResponse' }
    & Pick<ManufacturersResponse, 'total'>
    & { items: Array<(
      { __typename?: 'Manufacturer' }
      & Pick<Manufacturer, 'id' | 'name' | 'country' | 'photoUrl' | 'editedAt' | 'createdAt'>
    )> }
  ) }
);

export type GetManufacturerQueryVariables = {
  manufacturerId: Scalars['ID']
};


export type GetManufacturerQuery = (
  { __typename?: 'Query' }
  & { manufacturer: (
    { __typename?: 'Manufacturer' }
    & Pick<Manufacturer, 'id' | 'name' | 'country' | 'photoUrl'>
  ) }
);

export type AddManufacturerMutationVariables = {
  manufacturer: AddManufacturerInput
};


export type AddManufacturerMutation = (
  { __typename?: 'Mutation' }
  & { addManufacturer: (
    { __typename?: 'Manufacturer' }
    & Pick<Manufacturer, 'id' | 'name' | 'country' | 'createdAt' | 'editedAt'>
  ) }
);

export type EditManufacturerMutationVariables = {
  manufacturerId: Scalars['ID'],
  manufacturer: EditManufacturerInput
};


export type EditManufacturerMutation = (
  { __typename?: 'Mutation' }
  & { editManufacturer: (
    { __typename?: 'Manufacturer' }
    & Pick<Manufacturer, 'id' | 'name'>
  ) }
);

export type DeleteManufacturerMutationVariables = {
  manufacturerId: Scalars['ID']
};


export type DeleteManufacturerMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteManufacturer'>
);

export type GetRanksQueryVariables = {
  offset?: Maybe<Scalars['Int']>,
  perPage?: Maybe<Scalars['Int']>,
  order?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Scalars['String']>
};


export type GetRanksQuery = (
  { __typename?: 'Query' }
  & { ranks: (
    { __typename?: 'RanksResponse' }
    & Pick<RanksResponse, 'total'>
    & { items: Array<(
      { __typename?: 'Rank' }
      & Pick<Rank, 'id' | 'name' | 'lowerRange' | 'upperRange'>
    )> }
  ) }
);

export type GetTypesQueryVariables = {
  offset?: Maybe<Scalars['Int']>,
  perPage?: Maybe<Scalars['Int']>,
  order?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Scalars['String']>
};


export type GetTypesQuery = (
  { __typename?: 'Query' }
  & { types: (
    { __typename?: 'TypesResponse' }
    & Pick<TypesResponse, 'total'>
    & { items: Array<(
      { __typename?: 'ProductType' }
      & Pick<ProductType, 'id' | 'name'>
    )> }
  ) }
);

export type GetMeQueryVariables = {};


export type GetMeQuery = (
  { __typename?: 'Query' }
  & { whoAmI: (
    { __typename?: 'User' }
    & Pick<User, 'username' | 'email'>
  ) }
);

export type GetMeRoleQueryVariables = {};


export type GetMeRoleQuery = (
  { __typename?: 'Query' }
  & { whoAmI: (
    { __typename?: 'User' }
    & Pick<User, 'role'>
  ) }
);

export type GetMeDetailsQueryVariables = {};


export type GetMeDetailsQuery = (
  { __typename?: 'Query' }
  & { whoAmI: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'email' | 'role'>
    & { profile: (
      { __typename?: 'Profile' }
      & Pick<Profile, 'aromaImportance' | 'tasteImportance' | 'bitternessImportance' | 'priceImportance' | 'energyImportance' | 'overallImportance'>
    ) }
  ) }
);

export type EditUserMutationVariables = {
  user: EditUserInput,
  userId: Scalars['ID']
};


export type EditUserMutation = (
  { __typename?: 'Mutation' }
  & { editUser: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'email' | 'role'>
    & { profile: (
      { __typename?: 'Profile' }
      & Pick<Profile, 'tasteImportance' | 'aromaImportance' | 'bitternessImportance' | 'priceImportance' | 'energyImportance' | 'overallImportance'>
    ) }
  ) }
);

export type GetUsersQueryVariables = {
  offset?: Maybe<Scalars['Int']>,
  perPage?: Maybe<Scalars['Int']>,
  order?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Scalars['String']>
};


export type GetUsersQuery = (
  { __typename?: 'Query' }
  & { users: (
    { __typename?: 'UsersResponse' }
    & Pick<UsersResponse, 'total'>
    & { items: Array<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'email' | 'role'>
    )> }
  ) }
);


export const GetManufacturersDocument = gql`
    query getManufacturers($offset: Int, $perPage: Int, $order: String, $orderBy: String) {
  manufacturers(offset: $offset, perPage: $perPage, order: $order, orderBy: $orderBy) {
    items {
      id
      name
      country
      photoUrl
      editedAt
      createdAt
    }
    total
  }
}
    `;

/**
 * __useGetManufacturersQuery__
 *
 * To run a query within a React component, call `useGetManufacturersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetManufacturersQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetManufacturersQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      perPage: // value for 'perPage'
 *      order: // value for 'order'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useGetManufacturersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetManufacturersQuery, GetManufacturersQueryVariables>) {
        return ApolloReactHooks.useQuery<GetManufacturersQuery, GetManufacturersQueryVariables>(GetManufacturersDocument, baseOptions);
      }
export function useGetManufacturersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetManufacturersQuery, GetManufacturersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetManufacturersQuery, GetManufacturersQueryVariables>(GetManufacturersDocument, baseOptions);
        }
export type GetManufacturersQueryHookResult = ReturnType<typeof useGetManufacturersQuery>;
export type GetManufacturersLazyQueryHookResult = ReturnType<typeof useGetManufacturersLazyQuery>;
export type GetManufacturersQueryResult = ApolloReactCommon.QueryResult<GetManufacturersQuery, GetManufacturersQueryVariables>;
export const GetManufacturerDocument = gql`
    query getManufacturer($manufacturerId: ID!) {
  manufacturer(manufacturerId: $manufacturerId) {
    id
    name
    country
    photoUrl
  }
}
    `;

/**
 * __useGetManufacturerQuery__
 *
 * To run a query within a React component, call `useGetManufacturerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetManufacturerQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetManufacturerQuery({
 *   variables: {
 *      manufacturerId: // value for 'manufacturerId'
 *   },
 * });
 */
export function useGetManufacturerQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetManufacturerQuery, GetManufacturerQueryVariables>) {
        return ApolloReactHooks.useQuery<GetManufacturerQuery, GetManufacturerQueryVariables>(GetManufacturerDocument, baseOptions);
      }
export function useGetManufacturerLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetManufacturerQuery, GetManufacturerQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetManufacturerQuery, GetManufacturerQueryVariables>(GetManufacturerDocument, baseOptions);
        }
export type GetManufacturerQueryHookResult = ReturnType<typeof useGetManufacturerQuery>;
export type GetManufacturerLazyQueryHookResult = ReturnType<typeof useGetManufacturerLazyQuery>;
export type GetManufacturerQueryResult = ApolloReactCommon.QueryResult<GetManufacturerQuery, GetManufacturerQueryVariables>;
export const AddManufacturerDocument = gql`
    mutation addManufacturer($manufacturer: AddManufacturerInput!) {
  addManufacturer(manufacturer: $manufacturer) {
    id
    name
    country
    createdAt
    editedAt
  }
}
    `;
export type AddManufacturerMutationFn = ApolloReactCommon.MutationFunction<AddManufacturerMutation, AddManufacturerMutationVariables>;

/**
 * __useAddManufacturerMutation__
 *
 * To run a mutation, you first call `useAddManufacturerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddManufacturerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addManufacturerMutation, { data, loading, error }] = useAddManufacturerMutation({
 *   variables: {
 *      manufacturer: // value for 'manufacturer'
 *   },
 * });
 */
export function useAddManufacturerMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddManufacturerMutation, AddManufacturerMutationVariables>) {
        return ApolloReactHooks.useMutation<AddManufacturerMutation, AddManufacturerMutationVariables>(AddManufacturerDocument, baseOptions);
      }
export type AddManufacturerMutationHookResult = ReturnType<typeof useAddManufacturerMutation>;
export type AddManufacturerMutationResult = ApolloReactCommon.MutationResult<AddManufacturerMutation>;
export type AddManufacturerMutationOptions = ApolloReactCommon.BaseMutationOptions<AddManufacturerMutation, AddManufacturerMutationVariables>;
export const EditManufacturerDocument = gql`
    mutation editManufacturer($manufacturerId: ID!, $manufacturer: EditManufacturerInput!) {
  editManufacturer(manufacturerId: $manufacturerId, manufacturer: $manufacturer) {
    id
    name
  }
}
    `;
export type EditManufacturerMutationFn = ApolloReactCommon.MutationFunction<EditManufacturerMutation, EditManufacturerMutationVariables>;

/**
 * __useEditManufacturerMutation__
 *
 * To run a mutation, you first call `useEditManufacturerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditManufacturerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editManufacturerMutation, { data, loading, error }] = useEditManufacturerMutation({
 *   variables: {
 *      manufacturerId: // value for 'manufacturerId'
 *      manufacturer: // value for 'manufacturer'
 *   },
 * });
 */
export function useEditManufacturerMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EditManufacturerMutation, EditManufacturerMutationVariables>) {
        return ApolloReactHooks.useMutation<EditManufacturerMutation, EditManufacturerMutationVariables>(EditManufacturerDocument, baseOptions);
      }
export type EditManufacturerMutationHookResult = ReturnType<typeof useEditManufacturerMutation>;
export type EditManufacturerMutationResult = ApolloReactCommon.MutationResult<EditManufacturerMutation>;
export type EditManufacturerMutationOptions = ApolloReactCommon.BaseMutationOptions<EditManufacturerMutation, EditManufacturerMutationVariables>;
export const DeleteManufacturerDocument = gql`
    mutation deleteManufacturer($manufacturerId: ID!) {
  deleteManufacturer(manufacturerId: $manufacturerId)
}
    `;
export type DeleteManufacturerMutationFn = ApolloReactCommon.MutationFunction<DeleteManufacturerMutation, DeleteManufacturerMutationVariables>;

/**
 * __useDeleteManufacturerMutation__
 *
 * To run a mutation, you first call `useDeleteManufacturerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManufacturerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManufacturerMutation, { data, loading, error }] = useDeleteManufacturerMutation({
 *   variables: {
 *      manufacturerId: // value for 'manufacturerId'
 *   },
 * });
 */
export function useDeleteManufacturerMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteManufacturerMutation, DeleteManufacturerMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteManufacturerMutation, DeleteManufacturerMutationVariables>(DeleteManufacturerDocument, baseOptions);
      }
export type DeleteManufacturerMutationHookResult = ReturnType<typeof useDeleteManufacturerMutation>;
export type DeleteManufacturerMutationResult = ApolloReactCommon.MutationResult<DeleteManufacturerMutation>;
export type DeleteManufacturerMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteManufacturerMutation, DeleteManufacturerMutationVariables>;
export const GetRanksDocument = gql`
    query getRanks($offset: Int, $perPage: Int, $order: String, $orderBy: String) {
  ranks(offset: $offset, perPage: $perPage, order: $order, orderBy: $orderBy) {
    items {
      id
      name
      lowerRange
      upperRange
    }
    total
  }
}
    `;

/**
 * __useGetRanksQuery__
 *
 * To run a query within a React component, call `useGetRanksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRanksQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRanksQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      perPage: // value for 'perPage'
 *      order: // value for 'order'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useGetRanksQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetRanksQuery, GetRanksQueryVariables>) {
        return ApolloReactHooks.useQuery<GetRanksQuery, GetRanksQueryVariables>(GetRanksDocument, baseOptions);
      }
export function useGetRanksLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetRanksQuery, GetRanksQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetRanksQuery, GetRanksQueryVariables>(GetRanksDocument, baseOptions);
        }
export type GetRanksQueryHookResult = ReturnType<typeof useGetRanksQuery>;
export type GetRanksLazyQueryHookResult = ReturnType<typeof useGetRanksLazyQuery>;
export type GetRanksQueryResult = ApolloReactCommon.QueryResult<GetRanksQuery, GetRanksQueryVariables>;
export const GetTypesDocument = gql`
    query getTypes($offset: Int, $perPage: Int, $order: String, $orderBy: String) {
  types(offset: $offset, perPage: $perPage, order: $order, orderBy: $orderBy) {
    items {
      id
      name
    }
    total
  }
}
    `;

/**
 * __useGetTypesQuery__
 *
 * To run a query within a React component, call `useGetTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTypesQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      perPage: // value for 'perPage'
 *      order: // value for 'order'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useGetTypesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetTypesQuery, GetTypesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetTypesQuery, GetTypesQueryVariables>(GetTypesDocument, baseOptions);
      }
export function useGetTypesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTypesQuery, GetTypesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetTypesQuery, GetTypesQueryVariables>(GetTypesDocument, baseOptions);
        }
export type GetTypesQueryHookResult = ReturnType<typeof useGetTypesQuery>;
export type GetTypesLazyQueryHookResult = ReturnType<typeof useGetTypesLazyQuery>;
export type GetTypesQueryResult = ApolloReactCommon.QueryResult<GetTypesQuery, GetTypesQueryVariables>;
export const GetMeDocument = gql`
    query getMe {
  whoAmI {
    username
    email
  }
}
    `;

/**
 * __useGetMeQuery__
 *
 * To run a query within a React component, call `useGetMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
        return ApolloReactHooks.useQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, baseOptions);
      }
export function useGetMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, baseOptions);
        }
export type GetMeQueryHookResult = ReturnType<typeof useGetMeQuery>;
export type GetMeLazyQueryHookResult = ReturnType<typeof useGetMeLazyQuery>;
export type GetMeQueryResult = ApolloReactCommon.QueryResult<GetMeQuery, GetMeQueryVariables>;
export const GetMeRoleDocument = gql`
    query getMeRole {
  whoAmI {
    role
  }
}
    `;

/**
 * __useGetMeRoleQuery__
 *
 * To run a query within a React component, call `useGetMeRoleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeRoleQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeRoleQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeRoleQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetMeRoleQuery, GetMeRoleQueryVariables>) {
        return ApolloReactHooks.useQuery<GetMeRoleQuery, GetMeRoleQueryVariables>(GetMeRoleDocument, baseOptions);
      }
export function useGetMeRoleLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetMeRoleQuery, GetMeRoleQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetMeRoleQuery, GetMeRoleQueryVariables>(GetMeRoleDocument, baseOptions);
        }
export type GetMeRoleQueryHookResult = ReturnType<typeof useGetMeRoleQuery>;
export type GetMeRoleLazyQueryHookResult = ReturnType<typeof useGetMeRoleLazyQuery>;
export type GetMeRoleQueryResult = ApolloReactCommon.QueryResult<GetMeRoleQuery, GetMeRoleQueryVariables>;
export const GetMeDetailsDocument = gql`
    query getMeDetails {
  whoAmI {
    id
    username
    email
    role
    profile {
      aromaImportance
      tasteImportance
      bitternessImportance
      priceImportance
      energyImportance
      overallImportance
    }
  }
}
    `;

/**
 * __useGetMeDetailsQuery__
 *
 * To run a query within a React component, call `useGetMeDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeDetailsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeDetailsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetMeDetailsQuery, GetMeDetailsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetMeDetailsQuery, GetMeDetailsQueryVariables>(GetMeDetailsDocument, baseOptions);
      }
export function useGetMeDetailsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetMeDetailsQuery, GetMeDetailsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetMeDetailsQuery, GetMeDetailsQueryVariables>(GetMeDetailsDocument, baseOptions);
        }
export type GetMeDetailsQueryHookResult = ReturnType<typeof useGetMeDetailsQuery>;
export type GetMeDetailsLazyQueryHookResult = ReturnType<typeof useGetMeDetailsLazyQuery>;
export type GetMeDetailsQueryResult = ApolloReactCommon.QueryResult<GetMeDetailsQuery, GetMeDetailsQueryVariables>;
export const EditUserDocument = gql`
    mutation editUser($user: EditUserInput!, $userId: ID!) {
  editUser(user: $user, userId: $userId) {
    id
    username
    email
    role
    profile {
      tasteImportance
      aromaImportance
      bitternessImportance
      priceImportance
      energyImportance
      overallImportance
    }
  }
}
    `;
export type EditUserMutationFn = ApolloReactCommon.MutationFunction<EditUserMutation, EditUserMutationVariables>;

/**
 * __useEditUserMutation__
 *
 * To run a mutation, you first call `useEditUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editUserMutation, { data, loading, error }] = useEditUserMutation({
 *   variables: {
 *      user: // value for 'user'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useEditUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EditUserMutation, EditUserMutationVariables>) {
        return ApolloReactHooks.useMutation<EditUserMutation, EditUserMutationVariables>(EditUserDocument, baseOptions);
      }
export type EditUserMutationHookResult = ReturnType<typeof useEditUserMutation>;
export type EditUserMutationResult = ApolloReactCommon.MutationResult<EditUserMutation>;
export type EditUserMutationOptions = ApolloReactCommon.BaseMutationOptions<EditUserMutation, EditUserMutationVariables>;
export const GetUsersDocument = gql`
    query getUsers($offset: Int, $perPage: Int, $order: String, $orderBy: String) {
  users(offset: $offset, perPage: $perPage, order: $order, orderBy: $orderBy) {
    items {
      id
      username
      email
      role
    }
    total
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      perPage: // value for 'perPage'
 *      order: // value for 'order'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        return ApolloReactHooks.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
      }
export function useGetUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = ApolloReactCommon.QueryResult<GetUsersQuery, GetUsersQueryVariables>;