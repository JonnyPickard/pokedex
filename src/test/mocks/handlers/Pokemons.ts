// Uses: https://mswjs.io/docs/network-behavior/graphql/#mocking-responses
import { buildASTSchema, graphql as executeGraphQL } from "graphql";
import { HttpResponse, graphql } from "msw";
import Document from "schema.graphql";

import { buildMockPokemons } from "../fixtures/Pokemons/buildMockPokemons";

const schema = buildASTSchema(Document);

const pokeapi = graphql.link("http://localhost:4000");

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
