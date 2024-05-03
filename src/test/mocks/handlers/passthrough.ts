import { http, passthrough } from "msw";

export const passthroughHandlers = [
  http.get("https://raw.githubusercontent.com/*", passthrough),
];
