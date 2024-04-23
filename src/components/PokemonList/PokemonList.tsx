import { useQuery } from "@apollo/client";
import { gql } from "gql";

import * as styles from "./PokemonList.styles";

const GET_POKEMON = gql(`
  query GetPokemon {
    pokemon_v2_pokemon(limit: 9, order_by: { id: asc }) {
      name
      id
      weight
      height
    }
    pokemon_v2_pokemonsprites(limit: 9, order_by: { pokemon_id: asc }) {
      pokemon_id
      sprites
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
          data.pokemon_v2_pokemon.map(({ name, id, weight, height }, i) => {
            return (
              <li css={styles.PokemonInfoCard} key={id}>
                <h3>{name}</h3>
                <img
                  src={data.pokemon_v2_pokemonsprites[i].sprites.front_default}
                />
                <div css={styles.PokemonInfo}>
                  <p>
                    <b>ID: </b>
                    {id}
                  </p>
                  <p>
                    <b>Weight: </b>
                    {`${weight && weight / 10} kg` || "N/A"}
                  </p>
                  <p>
                    <b>Height: </b>
                    {`${height && height * 10} cm` || "N/A"}
                  </p>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
