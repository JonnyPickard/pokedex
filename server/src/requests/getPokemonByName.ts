import { PokedexInstance } from "../services/pokedexAPI.ts";

type NamesAndOrIds = Array<string | number>;

export const getPokemonByName = async (name: NamesAndOrIds) =>
  PokedexInstance.getPokemonByName(name);

export default getPokemonByName;
