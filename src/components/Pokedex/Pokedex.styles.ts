import { css } from "@emotion/react";
import { COLORS, MEDIA, SPACING } from "design-tokens";

const { GRAYSCALE } = COLORS;

export const Pokedex = css`
  display: grid;
  gap: ${SPACING.md};
  list-style: none;
  background: ${GRAYSCALE.shadedGray};
  border-radius: 5px;
  padding: ${SPACING.md};

  ${MEDIA.DESKTOP} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
