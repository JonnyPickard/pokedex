import { useQuery } from "@apollo/client";
import { gql } from "gql";

import * as styles from "./PokemonList.styles";

const GET_POKEMON = gql(`
  query Pokemons($limit: Int!, $offset: Int!) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      nextOffset
      prevOffset
      params
      results {
        image
        id
        name
        url
        artwork
        dreamworld
      }
      status
      message
    }
  }
`);

export function PokemonList() {
  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: {
      limit: 9,
      offset: 0,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <h2>All Pokemon</h2>
      <ul css={styles.PokemonList}>
        {data?.pokemons?.results?.map(
          ({ name, id, /* weight, height, */ dreamworld }) => {
            return (
              <li css={styles.PokemonInfoCard} key={id}>
                <h3>{name}</h3>
                <img src={dreamworld!} />
                <div css={styles.PokemonInfo}>
                  <p>
                    <b>ID: </b>
                    {id}
                  </p>
                  {/* <p>
                    <b>Weight: </b>
                    {`${weight && weight / 10} kg` || "N/A"}
                  </p>
                  <p>
                    <b>Height: </b>
                    {`${height && height * 10} cm` || "N/A"}
                  </p> */}
                </div>
              </li>
            );
          },
        )}
      </ul>
    </div>
  );
}
