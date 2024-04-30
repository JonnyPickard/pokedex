import { HttpResponse, graphql } from "msw";

import * as paginatedResponse from "../fixtures/Pokemons";

const pokeapi = graphql.link("http://localhost:4000");

export const Pokemons = [
  pokeapi.query("Pokemons", ({ variables }) => {
    switch (variables.offset) {
      case 9:
        return HttpResponse.json(paginatedResponse.offset9);
      case 18:
        return HttpResponse.json(paginatedResponse.offset18);
      case 27:
        return HttpResponse.json(paginatedResponse.offset27);
      case 36:
        return HttpResponse.json(paginatedResponse.offset36);
      case 45:
        return HttpResponse.json(paginatedResponse.offset45);
      case 54:
        return HttpResponse.json(paginatedResponse.offset54);
      default:
        return HttpResponse.json(paginatedResponse.offset0);
    }
  }),
];
