import { Camera } from "./Camera/Camera.tsx";
import * as styles from "./Pokedex.styles.ts";

export interface PokedexProps {
  children?: React.ReactNode;
}

export function Pokedex({ children }: PokedexProps) {
  return (
    <div css={styles.Pokedex}>
      <Camera />
      <h1>Pokedex</h1>
      {children}
    </div>
  );
}
