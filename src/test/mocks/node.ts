import { setupServer } from "msw/node";

import { Pokemons } from "./handlers";

export const server = setupServer(...Pokemons);
