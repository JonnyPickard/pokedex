import { PokedexInstance } from "../services/pokedexAPI.ts";

const BASE_URL_POKEMON = "http://localhost/api/v2/pokemon/";
const BASE_SPRITE =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const BASE_ARTWORK =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
const BASE_DREAMWORLD =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

const getOffset = (url: string) => {
  const { search } = new URL(url);
  const offset = new URLSearchParams(search).get("offset");
  return offset ? parseInt(offset, 10) : 0;
};

export const getPokemonsList = async (limit = 9, offset = 0) => {
  try {
    const response = await PokedexInstance.getPokemonsList({ limit, offset });
    if (response && response.results) {
      const responseWithImage = response.results.map((result) => {
        const id = result.url.replace(BASE_URL_POKEMON, "").slice(0, -1);

        return {
          name: result.name,
          url: result.url,
          id: parseInt(id, 10),
          image: `${BASE_SPRITE}${id}.png`,
          artwork: `${BASE_ARTWORK}${id}.png`,
          dreamworld: `${BASE_DREAMWORLD}${id}.svg`,
        };
      });

      const nextOffset = response.next ? getOffset(response.next) : 0;
      const prevOffset = response.previous ? getOffset(response.previous) : 0;

      return {
        ...response,
        params: { limit, offset },
        nextOffset,
        prevOffset,
        results: responseWithImage,
        status: true,
        message: "",
      };
    }

    return {
      ...response,
      params: { limit, offset },
      status: true,
      message: "",
    };
  } catch (error) {
    console.error(`> Error api getPokemonsList(${limit}, ${offset})`, error);

    return null;
  }
};
