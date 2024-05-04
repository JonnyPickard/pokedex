import { css } from "@emotion/react";
import { MEDIA } from "design-tokens";

export const Camera = css`
  width: 142px;
  height: 142px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -28%);

  ${MEDIA.DESKTOP} {
    left: 144px;
    top: -40px;
    transform: unset;
  }
`;
