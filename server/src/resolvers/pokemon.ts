import { getPokemonByName } from "../requests/getPokemonByName.ts";

// eslint-disable-next-line
// @ts-ignore
export default async (parent, params) => {
  return getPokemonByName(params.name);
};
