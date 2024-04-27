import Pokedex from "pokedex-promise-v2";

export const PokedexInstance = new Pokedex({
  protocol: "http",
  hostName: "localhost",
  versionPath: "/api/v2/",
  timeout: 5 * 1000, // 5s
  // Note: has a default cache of a day
  // cacheLimit: 100 * 1000, // 100s
});
