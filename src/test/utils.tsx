import { RenderOptions, render } from "@testing-library/react";
import { ReactElement } from "react";

import { WithProviders } from "./WithProviders";

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => render(ui, { wrapper: WithProviders, ...options });

// eslint-disable-next-line
export * from "@testing-library/react";
export { customRender as render };
