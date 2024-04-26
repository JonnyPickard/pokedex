import { PokedexInstance } from "../services/pokedexAPI.ts";

export const getPokemonsByName = async (names: string[]) => {
  try {
    const pokemons = await PokedexInstance.getPokemonByName(names);
    return pokemons;
  } catch (error) {
    console.error(console.error);
    return [];
  }
};

export default getPokemonsByName;
