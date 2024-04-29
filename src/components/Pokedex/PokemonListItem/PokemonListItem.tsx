import * as styles from "./PokemonListItem.styles";

interface PokemonListItemProps {
  id: number;
  name: string;
  dreamworldUrl: string;
  weight: number;
  height: number;
}

export function PokemonListItem({
  id,
  name,
  dreamworldUrl,
  weight,
  height,
}: PokemonListItemProps) {
  return (
    <li css={styles.PokemonInfoCard}>
      <h3>{name}</h3>
      <img src={dreamworldUrl} css={styles.PokemonImage} />
      <div css={styles.PokemonInfo}>
        <p>
          <b>ID: </b>
          {id}
        </p>
        {weight && (
          <p>
            <b>Weight: </b>
            {`${weight / 10} kg` || "N/A"}
          </p>
        )}
        {height && (
          <p>
            <b>Height: </b>
            {`${height * 10} cm` || "N/A"}
          </p>
        )}
      </div>
    </li>
  );
}
