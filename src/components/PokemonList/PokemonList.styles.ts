import { css } from "@emotion/react";
import { COLORS, SPACING } from "design-tokens";

const { GRAYSCALE } = COLORS;

export const PokemonList = css`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: ${SPACING.md};
  background: ${GRAYSCALE.shadedGray};
  border-radius: 5px;
  padding: ${SPACING.md};
`;

export const PokemonInfoCard = css`
  > h3 {
    text-transform: capitalize;
  }
  background: ${GRAYSCALE.almostBlack};
  padding: ${SPACING.md};
  border-radius: 5px;
`;

export const PokemonInfo = css`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;
