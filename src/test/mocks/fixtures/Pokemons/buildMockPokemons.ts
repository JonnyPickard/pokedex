import { extended_results } from "./extendedResults";
import { results } from "./results";

interface BuildMockPokemons {
  offset?: number;
  limit?: number;
}

const GEN_1_POKEMON_AMOUNT = 151;

export const buildMockPokemons = ({
  offset = 0,
  limit = 9,
}: BuildMockPokemons) => {
  return {
    count: 1302,
    params: {
      limit: limit,
      offset: offset,
    },
    nextOffset: offset + limit < GEN_1_POKEMON_AMOUNT ? offset + limit : 0,
    prevOffset: offset - limit >= 0 ? offset - limit : 0,
    results: results.slice(offset, offset + limit),
    extended_results: extended_results.slice(offset, offset + limit),
    status: true,
    message: "",
    __typename: "PokemonList",
  };
};
