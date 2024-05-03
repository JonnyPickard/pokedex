// Uses: https://mswjs.io/docs/network-behavior/graphql/#mocking-responses
import { buildASTSchema, graphql as executeGraphQL } from "graphql";
import { HttpResponse, graphql } from "msw";
import Document from "schema.graphql";

import * as paginatedResponse from "../fixtures/Pokemons";

const schema = buildASTSchema(Document);

const pokeapi = graphql.link("http://localhost:4000");

export const Pokemons = [
  pokeapi.query("Pokemons", async ({ query, variables }) => {
    const { errors, data } = await executeGraphQL({
      schema,
      source: query,
      variableValues: variables,
      rootValue: {
        ...paginatedResponse[`offset${variables.offset}`],
      },
    });

    return HttpResponse.json({ errors, data });
  }),
];
