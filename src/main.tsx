/// <reference types="@emotion/react/types/css-prop" />
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { LocalStorageWrapper, persistCache } from "apollo3-cache-persist";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import "./index.css";

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

// await before instantiating ApolloClient, else queries might run before the cache is persisted
await persistCache({
  cache,
  storage: new LocalStorageWrapper(window.localStorage),
});

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache,
});

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);
