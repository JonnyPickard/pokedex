import Pokedex from "pokedex-promise-v2";

const options = {
  protocol: "http",
  hostName: "localhost",
  versionPath: "/api/v2/",
  // cacheLimit: 100 * 1000, // 100s
  timeout: 5 * 1000, // 5s
};

// Pokedex options > protocol > 'http' isn't typed properly
// eslint-disable-next-line
// @ts-ignore
export const PokedexInstance = new Pokedex(options);
