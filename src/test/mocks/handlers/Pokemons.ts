// Uses: https://mswjs.io/docs/network-behavior/graphql/#mocking-responses
import { buildASTSchema, graphql as executeGraphQL } from "graphql";
import { HttpResponse, graphql } from "msw";
import Document from "schema.graphql";

import { buildMockPokemons } from "../fixtures/Pokemons";

const schema = buildASTSchema(Document);

// NOTE: You should pass these in via env variables
// but, considering this is a test project/ POC,
// it doesn't seem worth the time to set up
const apolloServerUri =
  process.env.NODE_ENV === "production"
    ? "https://localhost:4000"
    : "http://localhost:4000";

const pokeapi = graphql.link(apolloServerUri);

export const Pokemons = [
  pokeapi.query("Pokemons", async ({ query, variables }) => {
    const pokemons = buildMockPokemons({
      offset: variables.offset,
      limit: variables.limit,
    });
    const { errors, data } = await executeGraphQL({
      schema,
      source: query,
      variableValues: variables,
      rootValue: {
        pokemons,
      },
    });

    return HttpResponse.json({ errors, data });
  }),
];
