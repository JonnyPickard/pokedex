import { css } from "@emotion/react";

export const VisuallyHidden = css`
  height: 1px;
  overflow: hidden;
  width: 1px;
  position: absolute;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  white-space: nowrap;
`;
