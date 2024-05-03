import { setupWorker } from "msw/browser";

import { Pokemons, passthroughHandlers } from "./handlers";

export const worker = setupWorker(...[...Pokemons, ...passthroughHandlers]);
