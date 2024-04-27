import * as styles from "./Pokedex.styles.ts";

export interface PokedexProps {
  prop?: string;
}

export function Pokedex({ prop = "default value" }: PokedexProps) {
  return <div css={styles.Pokedex}>Pokedex {prop}</div>;
}
