import { getPokemonByName } from "../requests/getPokemonByName.ts";

interface GetPokemonByNameArgs {
  name: string;
}

export default async <T>(parent: T, args: GetPokemonByNameArgs) => {
  return getPokemonByName(args.name);
};
