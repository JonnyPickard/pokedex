import Pokedex from "pokedex-promise-v2";

const options = {
  protocol: "http",
  hostName: "localhost",
  versionPath: "/api/v2/",
  cacheLimit: 100 * 1000, // 100s
  timeout: 5 * 1000, // 5s
};

// eslint-disable-next-line
// @ts-ignore
const P = new Pokedex(options);

const getPokemonByName = () => {
  P.getPokemonByName(["eevee", "ditto"]) // with Promise
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log("There was an ERROR: ", error);
    });
};

export default getPokemonByName;
