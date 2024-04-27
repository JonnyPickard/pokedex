import { css } from "@emotion/react";
import { COLORS } from "design-tokens";

const { GRAYSCALE, RED } = COLORS;

const BALL_CAMERA_HEIGHT = 72;
const IPHONE_PMAX_WIDTH = 430;
const IPHONE_PMAX_HEIGHT = 932;

export const Pokedex = css`
  overflow: hidden;
  box-sizing: border-box;
  position: relative;

  width: ${IPHONE_PMAX_WIDTH}px;
  height: ${IPHONE_PMAX_HEIGHT}px;
  padding-top: ${BALL_CAMERA_HEIGHT}px;

  background: linear-gradient(
    180deg,
    ${GRAYSCALE.almostBlack} 17.5%,
    ${GRAYSCALE.black} 99.98%,
    ${GRAYSCALE.shadedGray} 100%
  );
  border: 4px solid ${RED.default};
  border-radius: 43px;
`;

export const PokedexContent = css`
  height: 100%;
  overflow-y: scroll;
`;
