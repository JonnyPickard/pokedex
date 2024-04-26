/// <reference types="@emotion/react/types/css-prop" />
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import "./index.css";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);
