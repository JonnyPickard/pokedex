import { PokedexInstance } from "../services/pokedexAPI.ts";

export const getPokemonByName = async (name: string) =>
  PokedexInstance.getPokemonByName(name);

export default getPokemonByName;
