import { css } from "@emotion/react";
import { COLORS, MEDIA, SPACING } from "design-tokens";

const { GRAYSCALE } = COLORS;

export const PokemonList = css`
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
