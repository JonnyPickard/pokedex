import getPokemonsByNames from "../requests/getPokemonsByNames.ts";
import pokemonResolver from "./pokemon.ts";
import pokemonsResolver from "./pokemons.ts";
import { Resolvers } from "./resolvers-types.ts";

const resolvers: Resolvers = {
  Query: {
    pokemon: pokemonResolver,
    pokemons: pokemonsResolver,
  },
  PokemonList: {
    extended_results(parent) {
      return getPokemonsByNames(parent.results.map((res) => res.name));
    },
  },
};

export default resolvers;
