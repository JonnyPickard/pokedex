/// <reference types="@emotion/react/types/css-prop" />
import { ApolloProvider } from "@apollo/client";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import { client } from "./apolloClient";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);
