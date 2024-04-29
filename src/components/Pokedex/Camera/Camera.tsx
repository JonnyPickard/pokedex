import { COLORS } from "design-tokens";

import * as styles from "./Camera.styles";

const { GRAYSCALE, RED, BLUE } = COLORS;

export function Camera() {
  return (
    <svg
      css={styles.Camera}
      width="142"
      height="72"
      viewBox="0 0 142 71"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="71"
        r="69"
        fill={GRAYSCALE.shadedWhite}
        stroke={RED.default}
        strokeWidth="4"
      />
      <mask
        id="path-2-outside-1_8_18"
        maskUnits="userSpaceOnUse"
        x="3"
        y="3"
        width="136"
        height="9"
        fill={GRAYSCALE.black}
      >
        <rect fill={GRAYSCALE.white} x="3" y="3" width="136" height="9" />
        <path d="M3 3H139V10H3V3Z" />
      </mask>
      <path d="M3 3H139V10H3V3Z" fill={GRAYSCALE.black} />
      <path
        d="M139 8H3V12H139V8Z"
        fill={RED.default}
        mask="url(#path-2-outside-1_8_18)"
      />
      <circle
        cx="70.5"
        cy="2.5"
        r="28.5"
        fill={GRAYSCALE.black}
        stroke={RED.default}
        strokeWidth="2"
      />
      <rect x="1" y="3" width="140" height="7" fill={GRAYSCALE.black} />
      <circle cx="71" r="69" stroke={RED.default} strokeWidth="4" />
      <circle
        cx="57"
        cy="12"
        r="4.5"
        fill="url(#paint0_linear_8_18)"
        fillOpacity="0.1"
        stroke="url(#paint1_linear_8_18)"
      />
      <circle
        cx="71"
        cy="12"
        r="4.5"
        fill="url(#paint2_linear_8_18)"
        stroke="url(#paint3_linear_8_18)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_8_18"
          x1="57"
          y1="7"
          x2="57"
          y2="17"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.195" stopColor={GRAYSCALE.shadedWhite} />
          <stop offset="0.505" stopColor={GRAYSCALE.mediumGray} />
          <stop offset="0.88" stopColor={GRAYSCALE.paleGray} />
        </linearGradient>
        <linearGradient
          id="paint1_linear_8_18"
          x1="57"
          y1="7"
          x2="57"
          y2="17"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.175" stopColor={GRAYSCALE.almostBlack} />
          <stop offset="0.9998" />
          <stop offset="0.9999" stopColor={GRAYSCALE.shadedGray} />
          <stop offset="1" stopColor={GRAYSCALE.shadedGray} />
        </linearGradient>
        <linearGradient
          id="paint2_linear_8_18"
          x1="71"
          y1="7"
          x2="71"
          y2="17"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={BLUE.default} />
          <stop offset="1" stopColor={BLUE.dark} />
        </linearGradient>
        <linearGradient
          id="paint3_linear_8_18"
          x1="71"
          y1="7"
          x2="71"
          y2="17"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.175" stopColor={GRAYSCALE.almostBlack} />
          <stop offset="0.9998" />
          <stop offset="0.9999" stopColor={GRAYSCALE.shadedGray} />
          <stop offset="1" stopColor={GRAYSCALE.shadedGray} />
        </linearGradient>
      </defs>
    </svg>
  );
}
