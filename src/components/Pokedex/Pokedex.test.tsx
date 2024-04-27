import { render } from "@testing-library/react";

import { Pokedex } from "./Pokedex";

test("<Pokedex />", () => {
  const screen = render(<Pokedex />);

  expect(screen.getByText(/Pokedex/)).toBeInTheDocument();
});
