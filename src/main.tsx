/// <reference types="@emotion/react/types/css-prop" />
import { ApolloProvider } from "@apollo/client";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import { client } from "./apolloClient";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);

async function enableMocking() {
  // Enabled for static pages site so I don't have to deploy a GQL/ Pokedex server
  if (process.env.NODE_ENV !== "production") {
    return;
  }

  const { worker } = await import("./test/mocks/browser");

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

enableMocking().then(() => {
  root.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
  );
});
