import { css } from "@emotion/react";
import { COLORS, SPACING } from "design-tokens";

const { GRAYSCALE } = COLORS;

export const PokemonListItem = css`
  display: grid;
  gap: ${SPACING.md};
  list-style: none;
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

  > p {
    margin: ${SPACING.sm};
  }
`;

export const PokemonImage = css`
  width: 220px;
  height: 220px;
  border-radius: 5px;
  margin: ${SPACING.sm} 0;
  padding: ${SPACING.lg};
  background: ${GRAYSCALE.paleBlack};
`;
