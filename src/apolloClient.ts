import { ApolloClient, InMemoryCache } from "@apollo/client";
import { LocalStorageWrapper, persistCache } from "apollo3-cache-persist";

const apolloServerUri =
  process.env.NODE_ENV === "production"
    ? "https://localhost:4000"
    : "http://localhost:4000";

const cache = new InMemoryCache({
  typePolicies: {
    Pokemons: {
      fields: {
        results: {
          // Concatenate the incoming list items with
          // the existing list items.
          merge(existing = [], incoming) {
            return [...existing, ...incoming];
          },
        },
        extended_results: {
          keyArgs: false,
          // Concatenate the incoming list items with
          // the existing list items.
          merge(existing = [], incoming) {
            return [...existing, ...incoming];
          },
        },
      },
    },
  },
});

// defer until after instantiating ApolloClient, else queries might run before the cache is persisted
persistCache({
  cache,
  storage: new LocalStorageWrapper(window.localStorage),
}).then(() => {});

export const client = new ApolloClient({
  uri: apolloServerUri,
  cache,
});
