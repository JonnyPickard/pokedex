import pokemonResolver from "./pokemon.ts";

const resolvers = {
  Query: {
    pokemon: pokemonResolver,
  },
};

export default resolvers;
