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
};

export type AddProductInput = {
  manufacturerId: Scalars['ID'],
  typeId: Scalars['ID'],
  name: Scalars['String'],
  details?: Maybe<Scalars['String']>,
  photoUrl?: Maybe<Scalars['String']>,
};

export type AddRankInput = {
  name: Scalars['String'],
  lowerRange: Scalars['Int'],
  upperRange: Scalars['Int'],
};

export type AddReviewInput = {
  aroma: Scalars['Int'],
  taste: Scalars['Int'],
  bitterness: Scalars['Int'],
  energy: Scalars['Int'],
  price: Scalars['Int'],
  overall: Scalars['Int'],
  description?: Maybe<Scalars['String']>,
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
  typeId?: Maybe<Scalars['ID']>,
  manufacturerId?: Maybe<Scalars['ID']>,
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
  description?: Maybe<Scalars['String']>,
};

export type EditTypeInput = {
  name: Scalars['String'],
};

export type EditUserInput = {
  country?: Maybe<Scalars['String']>,
  avatarUrl?: Maybe<Scalars['String']>,
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
  aromaAverage: Scalars['Float'],
  tasteAverage: Scalars['Float'],
  bitternessAverage: Scalars['Float'],
  energyAverage: Scalars['Float'],
  priceAverage: Scalars['Float'],
  overallAverage: Scalars['Float'],
  createdAt: Scalars['String'],
  personalizedScore?: Maybe<Scalars['Float']>,
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
  personalizeForUser?: Maybe<Scalars['ID']>,
  searchByName?: Maybe<Scalars['String']>,
  order?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Scalars['String']>,
  perPage?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryProductArgs = {
  productId: Scalars['ID']
};


export type QueryManufacturersArgs = {
  searchByName?: Maybe<Scalars['String']>,
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
  description?: Maybe<Scalars['String']>,
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
  avatarUrl?: Maybe<Scalars['String']>,
  role: Scalars['String'],
  reviews?: Maybe<Array<Review>>,
  products?: Maybe<Array<Product>>,
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

export type GetProductsQueryVariables = {
  offset?: Maybe<Scalars['Int']>,
  perPage?: Maybe<Scalars['Int']>,
  personalizeForUser?: Maybe<Scalars['ID']>,
  searchByName?: Maybe<Scalars['String']>
};


export type GetProductsQuery = (
  { __typename?: 'Query' }
  & { products: (
    { __typename?: 'ProductsResponse' }
    & Pick<ProductsResponse, 'total'>
    & { items: Array<(
      { __typename?: 'Product' }
      & Pick<Product, 'id' | 'name' | 'aromaAverage' | 'tasteAverage' | 'bitternessAverage' | 'energyAverage' | 'priceAverage' | 'details' | 'overallAverage' | 'photoUrl'>
      & { manufacturer: (
        { __typename?: 'Manufacturer' }
        & Pick<Manufacturer, 'id' | 'name' | 'country'>
      ), type: (
        { __typename?: 'ProductType' }
        & Pick<ProductType, 'id' | 'name'>
      ) }
    )> }
  ) }
);

export type GetProductQueryVariables = {
  productId: Scalars['ID']
};


export type GetProductQuery = (
  { __typename?: 'Query' }
  & { product: (
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'name' | 'details'>
    & { manufacturer: (
      { __typename?: 'Manufacturer' }
      & Pick<Manufacturer, 'id' | 'name'>
    ), type: (
      { __typename?: 'ProductType' }
      & Pick<ProductType, 'id' | 'name'>
    ) }
  ) }
);

export type AddProductMutationVariables = {
  product: AddProductInput
};


export type AddProductMutation = (
  { __typename?: 'Mutation' }
  & { addProduct: (
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'name' | 'details' | 'createdAt'>
    & { manufacturer: (
      { __typename?: 'Manufacturer' }
      & Pick<Manufacturer, 'id' | 'name'>
    ), type: (
      { __typename?: 'ProductType' }
      & Pick<ProductType, 'id' | 'name'>
    ) }
  ) }
);

export type EditProductMutationVariables = {
  productId: Scalars['ID'],
  product: EditProductInput
};


export type EditProductMutation = (
  { __typename?: 'Mutation' }
  & { editProduct: (
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'name' | 'details'>
    & { manufacturer: (
      { __typename?: 'Manufacturer' }
      & Pick<Manufacturer, 'id' | 'name'>
    ), type: (
      { __typename?: 'ProductType' }
      & Pick<ProductType, 'id' | 'name'>
    ) }
  ) }
);

export type DeleteProductMutationVariables = {
  productId: Scalars['ID']
};


export type DeleteProductMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteProduct'>
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

export type GetRankQueryVariables = {
  rankId: Scalars['ID']
};


export type GetRankQuery = (
  { __typename?: 'Query' }
  & { rank: (
    { __typename?: 'Rank' }
    & Pick<Rank, 'id' | 'name' | 'lowerRange' | 'upperRange'>
  ) }
);

export type AddRankMutationVariables = {
  rank: AddRankInput
};


export type AddRankMutation = (
  { __typename?: 'Mutation' }
  & { addRank: (
    { __typename?: 'Rank' }
    & Pick<Rank, 'id' | 'name' | 'lowerRange' | 'upperRange' | 'createdAt'>
  ) }
);

export type EditRankMutationVariables = {
  rankId: Scalars['ID'],
  rank: EditRankInput
};


export type EditRankMutation = (
  { __typename?: 'Mutation' }
  & { editRank: (
    { __typename?: 'Rank' }
    & Pick<Rank, 'id' | 'name' | 'lowerRange' | 'upperRange'>
  ) }
);

export type DeleteRankMutationVariables = {
  rankId: Scalars['ID']
};


export type DeleteRankMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteRank'>
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

export type GetTypeQueryVariables = {
  typeId: Scalars['ID']
};


export type GetTypeQuery = (
  { __typename?: 'Query' }
  & { type: (
    { __typename?: 'ProductType' }
    & Pick<ProductType, 'id' | 'name'>
  ) }
);

export type AddTypeMutationVariables = {
  type: AddTypeInput
};


export type AddTypeMutation = (
  { __typename?: 'Mutation' }
  & { addType: (
    { __typename?: 'ProductType' }
    & Pick<ProductType, 'id' | 'name'>
  ) }
);

export type EditTypeMutationVariables = {
  typeId: Scalars['ID'],
  type: EditTypeInput
};


export type EditTypeMutation = (
  { __typename?: 'Mutation' }
  & { editType: (
    { __typename?: 'ProductType' }
    & Pick<ProductType, 'id' | 'name'>
  ) }
);

export type DeleteTypeMutationVariables = {
  typeId: Scalars['ID']
};


export type DeleteTypeMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteType'>
);

export type GetMeQueryVariables = {};


export type GetMeQuery = (
  { __typename?: 'Query' }
  & { whoAmI: (
    { __typename?: 'User' }
    & Pick<User, 'username' | 'avatarUrl' | 'email'>
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
    & Pick<User, 'id' | 'username' | 'email' | 'role' | 'avatarUrl'>
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
      & Pick<User, 'id' | 'username' | 'email' | 'role' | 'avatarUrl'>
    )> }
  ) }
);

export type AssignAdminMutationVariables = {
  userId: Scalars['ID']
};


export type AssignAdminMutation = (
  { __typename?: 'Mutation' }
  & { assignAdmin: (
    { __typename?: 'User' }
    & Pick<User, 'id'>
  ) }
);

export type DeleteUserMutationVariables = {
  userId: Scalars['ID']
};


export type DeleteUserMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteUser'>
);

export type RevokeAdminMutationVariables = {
  userId: Scalars['ID']
};


export type RevokeAdminMutation = (
  { __typename?: 'Mutation' }
  & { revokeAdmin: (
    { __typename?: 'User' }
    & Pick<User, 'id'>
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
export const GetProductsDocument = gql`
    query getProducts($offset: Int, $perPage: Int, $personalizeForUser: ID, $searchByName: String) {
  products(offset: $offset, perPage: $perPage, personalizeForUser: $personalizeForUser, searchByName: $searchByName) {
    total
    items {
      id
      name
      manufacturer {
        id
        name
        country
      }
      type {
        id
        name
      }
      aromaAverage
      tasteAverage
      bitternessAverage
      energyAverage
      priceAverage
      details
      overallAverage
      photoUrl
    }
  }
}
    `;

/**
 * __useGetProductsQuery__
 *
 * To run a query within a React component, call `useGetProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      perPage: // value for 'perPage'
 *      personalizeForUser: // value for 'personalizeForUser'
 *      searchByName: // value for 'searchByName'
 *   },
 * });
 */
export function useGetProductsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, baseOptions);
      }
export function useGetProductsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, baseOptions);
        }
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<typeof useGetProductsLazyQuery>;
export type GetProductsQueryResult = ApolloReactCommon.QueryResult<GetProductsQuery, GetProductsQueryVariables>;
export const GetProductDocument = gql`
    query getProduct($productId: ID!) {
  product(productId: $productId) {
    id
    name
    manufacturer {
      id
      name
    }
    type {
      id
      name
    }
    details
  }
}
    `;

/**
 * __useGetProductQuery__
 *
 * To run a query within a React component, call `useGetProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useGetProductQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetProductQuery, GetProductQueryVariables>) {
        return ApolloReactHooks.useQuery<GetProductQuery, GetProductQueryVariables>(GetProductDocument, baseOptions);
      }
export function useGetProductLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetProductQuery, GetProductQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetProductQuery, GetProductQueryVariables>(GetProductDocument, baseOptions);
        }
export type GetProductQueryHookResult = ReturnType<typeof useGetProductQuery>;
export type GetProductLazyQueryHookResult = ReturnType<typeof useGetProductLazyQuery>;
export type GetProductQueryResult = ApolloReactCommon.QueryResult<GetProductQuery, GetProductQueryVariables>;
export const AddProductDocument = gql`
    mutation addProduct($product: AddProductInput!) {
  addProduct(product: $product) {
    id
    name
    manufacturer {
      id
      name
    }
    type {
      id
      name
    }
    details
    createdAt
  }
}
    `;
export type AddProductMutationFn = ApolloReactCommon.MutationFunction<AddProductMutation, AddProductMutationVariables>;

/**
 * __useAddProductMutation__
 *
 * To run a mutation, you first call `useAddProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addProductMutation, { data, loading, error }] = useAddProductMutation({
 *   variables: {
 *      product: // value for 'product'
 *   },
 * });
 */
export function useAddProductMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddProductMutation, AddProductMutationVariables>) {
        return ApolloReactHooks.useMutation<AddProductMutation, AddProductMutationVariables>(AddProductDocument, baseOptions);
      }
export type AddProductMutationHookResult = ReturnType<typeof useAddProductMutation>;
export type AddProductMutationResult = ApolloReactCommon.MutationResult<AddProductMutation>;
export type AddProductMutationOptions = ApolloReactCommon.BaseMutationOptions<AddProductMutation, AddProductMutationVariables>;
export const EditProductDocument = gql`
    mutation editProduct($productId: ID!, $product: EditProductInput!) {
  editProduct(productId: $productId, product: $product) {
    id
    name
    manufacturer {
      id
      name
    }
    type {
      id
      name
    }
    details
  }
}
    `;
export type EditProductMutationFn = ApolloReactCommon.MutationFunction<EditProductMutation, EditProductMutationVariables>;

/**
 * __useEditProductMutation__
 *
 * To run a mutation, you first call `useEditProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editProductMutation, { data, loading, error }] = useEditProductMutation({
 *   variables: {
 *      productId: // value for 'productId'
 *      product: // value for 'product'
 *   },
 * });
 */
export function useEditProductMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EditProductMutation, EditProductMutationVariables>) {
        return ApolloReactHooks.useMutation<EditProductMutation, EditProductMutationVariables>(EditProductDocument, baseOptions);
      }
export type EditProductMutationHookResult = ReturnType<typeof useEditProductMutation>;
export type EditProductMutationResult = ApolloReactCommon.MutationResult<EditProductMutation>;
export type EditProductMutationOptions = ApolloReactCommon.BaseMutationOptions<EditProductMutation, EditProductMutationVariables>;
export const DeleteProductDocument = gql`
    mutation deleteProduct($productId: ID!) {
  deleteProduct(productId: $productId)
}
    `;
export type DeleteProductMutationFn = ApolloReactCommon.MutationFunction<DeleteProductMutation, DeleteProductMutationVariables>;

/**
 * __useDeleteProductMutation__
 *
 * To run a mutation, you first call `useDeleteProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductMutation, { data, loading, error }] = useDeleteProductMutation({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useDeleteProductMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteProductMutation, DeleteProductMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteProductMutation, DeleteProductMutationVariables>(DeleteProductDocument, baseOptions);
      }
export type DeleteProductMutationHookResult = ReturnType<typeof useDeleteProductMutation>;
export type DeleteProductMutationResult = ApolloReactCommon.MutationResult<DeleteProductMutation>;
export type DeleteProductMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteProductMutation, DeleteProductMutationVariables>;
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
export const GetRankDocument = gql`
    query getRank($rankId: ID!) {
  rank(rankId: $rankId) {
    id
    name
    lowerRange
    upperRange
  }
}
    `;

/**
 * __useGetRankQuery__
 *
 * To run a query within a React component, call `useGetRankQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRankQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRankQuery({
 *   variables: {
 *      rankId: // value for 'rankId'
 *   },
 * });
 */
export function useGetRankQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetRankQuery, GetRankQueryVariables>) {
        return ApolloReactHooks.useQuery<GetRankQuery, GetRankQueryVariables>(GetRankDocument, baseOptions);
      }
export function useGetRankLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetRankQuery, GetRankQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetRankQuery, GetRankQueryVariables>(GetRankDocument, baseOptions);
        }
export type GetRankQueryHookResult = ReturnType<typeof useGetRankQuery>;
export type GetRankLazyQueryHookResult = ReturnType<typeof useGetRankLazyQuery>;
export type GetRankQueryResult = ApolloReactCommon.QueryResult<GetRankQuery, GetRankQueryVariables>;
export const AddRankDocument = gql`
    mutation addRank($rank: AddRankInput!) {
  addRank(rank: $rank) {
    id
    name
    lowerRange
    upperRange
    createdAt
  }
}
    `;
export type AddRankMutationFn = ApolloReactCommon.MutationFunction<AddRankMutation, AddRankMutationVariables>;

/**
 * __useAddRankMutation__
 *
 * To run a mutation, you first call `useAddRankMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddRankMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addRankMutation, { data, loading, error }] = useAddRankMutation({
 *   variables: {
 *      rank: // value for 'rank'
 *   },
 * });
 */
export function useAddRankMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddRankMutation, AddRankMutationVariables>) {
        return ApolloReactHooks.useMutation<AddRankMutation, AddRankMutationVariables>(AddRankDocument, baseOptions);
      }
export type AddRankMutationHookResult = ReturnType<typeof useAddRankMutation>;
export type AddRankMutationResult = ApolloReactCommon.MutationResult<AddRankMutation>;
export type AddRankMutationOptions = ApolloReactCommon.BaseMutationOptions<AddRankMutation, AddRankMutationVariables>;
export const EditRankDocument = gql`
    mutation editRank($rankId: ID!, $rank: EditRankInput!) {
  editRank(rankId: $rankId, rank: $rank) {
    id
    name
    lowerRange
    upperRange
  }
}
    `;
export type EditRankMutationFn = ApolloReactCommon.MutationFunction<EditRankMutation, EditRankMutationVariables>;

/**
 * __useEditRankMutation__
 *
 * To run a mutation, you first call `useEditRankMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditRankMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editRankMutation, { data, loading, error }] = useEditRankMutation({
 *   variables: {
 *      rankId: // value for 'rankId'
 *      rank: // value for 'rank'
 *   },
 * });
 */
export function useEditRankMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EditRankMutation, EditRankMutationVariables>) {
        return ApolloReactHooks.useMutation<EditRankMutation, EditRankMutationVariables>(EditRankDocument, baseOptions);
      }
export type EditRankMutationHookResult = ReturnType<typeof useEditRankMutation>;
export type EditRankMutationResult = ApolloReactCommon.MutationResult<EditRankMutation>;
export type EditRankMutationOptions = ApolloReactCommon.BaseMutationOptions<EditRankMutation, EditRankMutationVariables>;
export const DeleteRankDocument = gql`
    mutation deleteRank($rankId: ID!) {
  deleteRank(rankId: $rankId)
}
    `;
export type DeleteRankMutationFn = ApolloReactCommon.MutationFunction<DeleteRankMutation, DeleteRankMutationVariables>;

/**
 * __useDeleteRankMutation__
 *
 * To run a mutation, you first call `useDeleteRankMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRankMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRankMutation, { data, loading, error }] = useDeleteRankMutation({
 *   variables: {
 *      rankId: // value for 'rankId'
 *   },
 * });
 */
export function useDeleteRankMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteRankMutation, DeleteRankMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteRankMutation, DeleteRankMutationVariables>(DeleteRankDocument, baseOptions);
      }
export type DeleteRankMutationHookResult = ReturnType<typeof useDeleteRankMutation>;
export type DeleteRankMutationResult = ApolloReactCommon.MutationResult<DeleteRankMutation>;
export type DeleteRankMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteRankMutation, DeleteRankMutationVariables>;
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
export const GetTypeDocument = gql`
    query getType($typeId: ID!) {
  type(typeId: $typeId) {
    id
    name
  }
}
    `;

/**
 * __useGetTypeQuery__
 *
 * To run a query within a React component, call `useGetTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTypeQuery({
 *   variables: {
 *      typeId: // value for 'typeId'
 *   },
 * });
 */
export function useGetTypeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetTypeQuery, GetTypeQueryVariables>) {
        return ApolloReactHooks.useQuery<GetTypeQuery, GetTypeQueryVariables>(GetTypeDocument, baseOptions);
      }
export function useGetTypeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTypeQuery, GetTypeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetTypeQuery, GetTypeQueryVariables>(GetTypeDocument, baseOptions);
        }
export type GetTypeQueryHookResult = ReturnType<typeof useGetTypeQuery>;
export type GetTypeLazyQueryHookResult = ReturnType<typeof useGetTypeLazyQuery>;
export type GetTypeQueryResult = ApolloReactCommon.QueryResult<GetTypeQuery, GetTypeQueryVariables>;
export const AddTypeDocument = gql`
    mutation addType($type: AddTypeInput!) {
  addType(type: $type) {
    id
    name
  }
}
    `;
export type AddTypeMutationFn = ApolloReactCommon.MutationFunction<AddTypeMutation, AddTypeMutationVariables>;

/**
 * __useAddTypeMutation__
 *
 * To run a mutation, you first call `useAddTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTypeMutation, { data, loading, error }] = useAddTypeMutation({
 *   variables: {
 *      type: // value for 'type'
 *   },
 * });
 */
export function useAddTypeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddTypeMutation, AddTypeMutationVariables>) {
        return ApolloReactHooks.useMutation<AddTypeMutation, AddTypeMutationVariables>(AddTypeDocument, baseOptions);
      }
export type AddTypeMutationHookResult = ReturnType<typeof useAddTypeMutation>;
export type AddTypeMutationResult = ApolloReactCommon.MutationResult<AddTypeMutation>;
export type AddTypeMutationOptions = ApolloReactCommon.BaseMutationOptions<AddTypeMutation, AddTypeMutationVariables>;
export const EditTypeDocument = gql`
    mutation editType($typeId: ID!, $type: EditTypeInput!) {
  editType(typeId: $typeId, type: $type) {
    id
    name
  }
}
    `;
export type EditTypeMutationFn = ApolloReactCommon.MutationFunction<EditTypeMutation, EditTypeMutationVariables>;

/**
 * __useEditTypeMutation__
 *
 * To run a mutation, you first call `useEditTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editTypeMutation, { data, loading, error }] = useEditTypeMutation({
 *   variables: {
 *      typeId: // value for 'typeId'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useEditTypeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EditTypeMutation, EditTypeMutationVariables>) {
        return ApolloReactHooks.useMutation<EditTypeMutation, EditTypeMutationVariables>(EditTypeDocument, baseOptions);
      }
export type EditTypeMutationHookResult = ReturnType<typeof useEditTypeMutation>;
export type EditTypeMutationResult = ApolloReactCommon.MutationResult<EditTypeMutation>;
export type EditTypeMutationOptions = ApolloReactCommon.BaseMutationOptions<EditTypeMutation, EditTypeMutationVariables>;
export const DeleteTypeDocument = gql`
    mutation deleteType($typeId: ID!) {
  deleteType(typeId: $typeId)
}
    `;
export type DeleteTypeMutationFn = ApolloReactCommon.MutationFunction<DeleteTypeMutation, DeleteTypeMutationVariables>;

/**
 * __useDeleteTypeMutation__
 *
 * To run a mutation, you first call `useDeleteTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTypeMutation, { data, loading, error }] = useDeleteTypeMutation({
 *   variables: {
 *      typeId: // value for 'typeId'
 *   },
 * });
 */
export function useDeleteTypeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteTypeMutation, DeleteTypeMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteTypeMutation, DeleteTypeMutationVariables>(DeleteTypeDocument, baseOptions);
      }
export type DeleteTypeMutationHookResult = ReturnType<typeof useDeleteTypeMutation>;
export type DeleteTypeMutationResult = ApolloReactCommon.MutationResult<DeleteTypeMutation>;
export type DeleteTypeMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteTypeMutation, DeleteTypeMutationVariables>;
export const GetMeDocument = gql`
    query getMe {
  whoAmI {
    username
    avatarUrl
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
    avatarUrl
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
      avatarUrl
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
export const AssignAdminDocument = gql`
    mutation assignAdmin($userId: ID!) {
  assignAdmin(userId: $userId) {
    id
  }
}
    `;
export type AssignAdminMutationFn = ApolloReactCommon.MutationFunction<AssignAdminMutation, AssignAdminMutationVariables>;

/**
 * __useAssignAdminMutation__
 *
 * To run a mutation, you first call `useAssignAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAssignAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [assignAdminMutation, { data, loading, error }] = useAssignAdminMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useAssignAdminMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AssignAdminMutation, AssignAdminMutationVariables>) {
        return ApolloReactHooks.useMutation<AssignAdminMutation, AssignAdminMutationVariables>(AssignAdminDocument, baseOptions);
      }
export type AssignAdminMutationHookResult = ReturnType<typeof useAssignAdminMutation>;
export type AssignAdminMutationResult = ApolloReactCommon.MutationResult<AssignAdminMutation>;
export type AssignAdminMutationOptions = ApolloReactCommon.BaseMutationOptions<AssignAdminMutation, AssignAdminMutationVariables>;
export const DeleteUserDocument = gql`
    mutation deleteUser($userId: ID!) {
  deleteUser(userId: $userId)
}
    `;
export type DeleteUserMutationFn = ApolloReactCommon.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, baseOptions);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = ApolloReactCommon.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const RevokeAdminDocument = gql`
    mutation revokeAdmin($userId: ID!) {
  revokeAdmin(userId: $userId) {
    id
  }
}
    `;
export type RevokeAdminMutationFn = ApolloReactCommon.MutationFunction<RevokeAdminMutation, RevokeAdminMutationVariables>;

/**
 * __useRevokeAdminMutation__
 *
 * To run a mutation, you first call `useRevokeAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRevokeAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [revokeAdminMutation, { data, loading, error }] = useRevokeAdminMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useRevokeAdminMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RevokeAdminMutation, RevokeAdminMutationVariables>) {
        return ApolloReactHooks.useMutation<RevokeAdminMutation, RevokeAdminMutationVariables>(RevokeAdminDocument, baseOptions);
      }
export type RevokeAdminMutationHookResult = ReturnType<typeof useRevokeAdminMutation>;
export type RevokeAdminMutationResult = ApolloReactCommon.MutationResult<RevokeAdminMutation>;
export type RevokeAdminMutationOptions = ApolloReactCommon.BaseMutationOptions<RevokeAdminMutation, RevokeAdminMutationVariables>;