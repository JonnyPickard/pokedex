// Credit to: https://codepen.io/notelho/pen/vYBNZOR
//   for this very cool spinner implementation
import { css, keyframes } from "@emotion/react";
import { COLORS, SPACING } from "design-tokens";

const { GRAYSCALE, RED, BLUE } = COLORS;

const roll = keyframes`
  from {
    transform: rotate(0);
  }
  90%,
  to {
    transform: rotate(720deg);
  }
  `;

const button = keyframes`
  from,
  50%,
  to {
    box-shadow: 0 0 6px -2px ${RED.light} inset;
  }
  25%,
  75% {
    box-shadow: 0 0 6px -2px ${BLUE.default} inset;
  }
`;

export const SpinnerContainer = css`
  padding: ${SPACING.lg} 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const Spinner = css`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: ${SPACING.xl};
  height: ${SPACING.xl};
  border-radius: 50%;
  background: ${GRAYSCALE.almostWhite};
  box-shadow: -20px 0 rgba(0, 0, 0, 0.1) inset;
  animation: ${roll} 1s ease-in-out infinite;
  background: linear-gradient(
    to bottom,
    ${RED.default} 0%,
    ${RED.default} 50.5%,
    ${GRAYSCALE.almostWhite} 50.51%,
    ${GRAYSCALE.almostWhite} 100%
  );

  // Line
  &:after {
    content: "";
    width: ${SPACING.xl};
    height: 2px;
    background: ${GRAYSCALE.lightBlack};
  }

  // Middle Button
  &:before {
    content: "";
    position: absolute;
    width: ${SPACING.md};
    height: ${SPACING.md};
    border: solid 2px ${GRAYSCALE.lightBlack};
    border-radius: 50%;
    background: ${GRAYSCALE.almostWhite};
    z-index: 1;
    box-shadow: 0 0 6px -2px ${RED.light} inset;
    animation: ${button} 3s ease infinite;
  }
`;
