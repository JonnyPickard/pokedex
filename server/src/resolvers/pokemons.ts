import { getPokemonsList } from "../requests/getPokemons.ts";

interface GetPokemonsListArgs {
  limit: number;
  offset: number;
}

export default async <T>(parent: T, args: GetPokemonsListArgs) => {
  return getPokemonsList(args.limit, args.offset);
};
