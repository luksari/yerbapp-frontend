import { createHttpLink } from 'apollo-link-http';
import { GRAPHQL_URL } from 'config/url';
import { ApolloClient, InMemoryCache, ApolloLink } from 'apollo-boost';
import { setContext } from 'apollo-link-context';

const httpLink = createHttpLink({ uri: GRAPHQL_URL });

const cleanTypeName = new ApolloLink((operation, forward) => {
  if (operation.variables) {
    const omitTypename = (key, value) => (key === '__typename' ? undefined : value);
    // eslint-disable-next-line no-param-reassign
    operation.variables = JSON.parse(JSON.stringify(operation.variables), omitTypename);
  }
  return forward(operation).map((data) => {
    return data;
  });
});


const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');

  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  };
});

const httpLinkWithOmitTypename = ApolloLink.from([
  cleanTypeName,
  authLink,
  httpLink,
]);

export const client = new ApolloClient({
  link: authLink.concat(httpLinkWithOmitTypename),
  cache: new InMemoryCache({
  }),
});
