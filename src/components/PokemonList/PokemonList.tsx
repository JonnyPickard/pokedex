import { useQuery } from "@apollo/client";
import { gql } from "gql";

import * as styles from "./PokemonList.styles";

const GET_POKEMON = gql(`
  query GetPokemon {
    pokemon_v2_pokemon(limit: 10) {
      name
      weight
      id
      pokemon_species_id
    }
  }
`);

export function PokemonList() {
  const { loading, error, data } = useQuery(GET_POKEMON);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <h2>All Pokemon</h2>
      <ul css={styles.PokemonList}>
        {data &&
          data.pokemon_v2_pokemon.map(
            ({ name, id, pokemon_species_id, weight }) => (
              <li css={styles.PokemonInfoCard} key={id}>
                <h3>{name}</h3>
                <div css={styles.PokemonInfo}>
                  <p>
                    <b>ID: </b>
                    {pokemon_species_id}
                  </p>
                  <p>
                    <b>Weight: </b>
                    {weight}
                  </p>
                </div>
              </li>
            ),
          )}
      </ul>
    </div>
  );
}
