import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  from,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { gql } from '@apollo/client';

// GraphQL server URI
const apiUrl = 'https://core-api.production.claim.co/graphql';
const httpLink = createHttpLink({
  uri: apiUrl,
});

// Demo user credentials
const demoUserId = '';
const demoAuthToken = '';

// Add auth token to request headers
const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    Authorization: `Bearer ${demoAuthToken}`,
    userId: demoUserId,
  },
}));

// Create Apollo Client
const client = new ApolloClient({
  link: from([authLink, httpLink]),
  cache: new InMemoryCache(),
});

export default client;

// GraphQL Query for Profile List Card
export const PROFILE_LIST_CARD_QUERY = gql`
  query ProfileListCard($pk: Int!) {
    token_by_pk(pk: $pk) {
      pk
      metadata {
        id
        image
        name
        value
        value_type
        expiration_datetime
      }
      contract {
        metadata {
          id
          benefit_tldr
          brand {
            id
            image_url
            name
          }
        }
      }
    }
  }
`;
