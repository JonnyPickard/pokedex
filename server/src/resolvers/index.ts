import pokemonResolver from "./pokemon.ts";
import pokemonsResolver from "./pokemons.ts";
import { Resolvers } from "./resolvers-types.ts";

const resolvers: Resolvers = {
  Query: {
    pokemon: pokemonResolver,
    pokemons: pokemonsResolver,
  },
};

export default resolvers;
