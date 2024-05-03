import { render, waitFor } from "test";
import { useIntersectionObserver } from "usehooks-ts";
import { Mock } from "vitest";

import { Pokedex } from "./Pokedex";

vi.mock("usehooks-ts", () => ({
  useIntersectionObserver: vi
    .fn()
    .mockImplementation(() => ({ isIntersecting: false })),
}));

test("<Pokedex /> renders with heading", async () => {
  const screen = render(<Pokedex />);

  expect(
    screen.getByRole("heading", { level: 1, name: "Pokedex" }),
  ).toBeInTheDocument();
});

test("fetches & renders pokemon list on mount", async () => {
  const screen = render(<Pokedex />);

  await waitFor(() =>
    expect(screen.getByText("bulbasaur")).toBeInTheDocument(),
  );
});

test("fetches paginated results when scrolling down to intersect interesection observer", async () => {
  const screen = render(<Pokedex />);

  await waitFor(() =>
    expect(screen.getByText("bulbasaur")).toBeInTheDocument(),
  );

  expect(screen.queryByText("pidgeotto")).not.toBeInTheDocument();

  (vi.mocked(useIntersectionObserver) as Mock).mockImplementationOnce(() => ({
    isIntersecting: true,
  }));

  screen.rerender(<Pokedex />);

  await waitFor(() =>
    expect(screen.getByText("pidgeotto")).toBeInTheDocument(),
  );
});
