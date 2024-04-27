import { Camera } from "./Camera";
import * as styles from "./Pokedex.styles.ts";
import { PokemonList } from "./PokemonList";

export interface PokedexProps {
  children?: React.ReactNode;
}

export function Pokedex({ children }: PokedexProps) {
  return (
    <div css={styles.Pokedex}>
      <Camera />
      {/* <h1>Pokedex</h1> */}
      <div css={styles.PokedexContent}>
        <PokemonList />
      </div>
      {children}
    </div>
  );
}
