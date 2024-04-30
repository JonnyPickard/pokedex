import { render } from "test";

import { Pokedex } from "./Pokedex";

test("<Pokedex /> renders with heading", () => {
  const screen = render(<Pokedex />);
  expect(
    screen.getByRole("heading", { level: 1, name: "Pokedex" }),
  ).toBeInTheDocument();
});
