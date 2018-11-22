// Apollo GQL Related imports
import { withClientState } from "apollo-link-state";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink } from "apollo-link";
import { setContext } from "apollo-link-context";
import { createHttpLink } from "apollo-link-http";

// Apollo Link State
import Defaults from "config/defaults";
import Resolvers from "config/resolvers";

// constants
import { AUTH_TOKEN } from "constants/storageTokens";

// Apollo Link Set Up
const uri = "http://localhost:4000/";

const cache = new InMemoryCache();

const stateLink = withClientState({
  cache,
  defaults: Defaults,
  resolvers: Resolvers
});

const authLink = setContext((_, { headers }) => {
  // get items from local storage
  const token = localStorage.getItem(AUTH_TOKEN) || sessionStorage.getItem(AUTH_TOKEN);
  // return the headers to the context so httpLink can read them
  let newHeaders = {
    ...headers,
    authorization: token ? `Bearer ${token}` : ""
  };

  return {
    headers: newHeaders
  };
});

const httpLink = createHttpLink({
  uri
});

const client = new ApolloClient({
  link: ApolloLink.from([stateLink, authLink.concat(httpLink)]),
  cache
});

// Restores the defaultState when the store is reset
client.onResetStore(stateLink.writeDefaults);

export default client;
