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
      extended_results {
        weight
        height
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
        {data?.pokemons?.results?.map(({ name, id, dreamworld }, i) => {
          const extendedResults = data.pokemons?.extended_results![i];
          return (
            <li css={styles.PokemonInfoCard} key={id}>
              <h3>{name}</h3>
              <img src={dreamworld!} />
              <div css={styles.PokemonInfo}>
                <p>
                  <b>ID: </b>
                  {id}
                </p>
                {extendedResults?.weight && (
                  <p>
                    <b>Weight: </b>
                    {`${extendedResults?.weight / 10} kg` || "N/A"}
                  </p>
                )}
                {extendedResults?.height && (
                  <p>
                    <b>Height: </b>
                    {`${extendedResults?.height * 10} cm` || "N/A"}
                  </p>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
