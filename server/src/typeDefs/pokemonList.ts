export default {
  typeDef: `#graphql
  type PokemonList {
    count: Int
    next: String
    previous: String
    nextOffset: Int
    prevOffset: Int
    params: JSON
    results: [PokemonItem]
    status: Boolean
    message: String
  }
`,
};
