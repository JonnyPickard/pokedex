import { useQuery } from "@apollo/client";
import { gql } from "gql";
import { useEffect, useState } from "react";
import { useIntersectionObserver } from "usehooks-ts";

import { PokemonListItem } from "../PokemonListItem";
import { Spinner } from "../Spinner";
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
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const { loading, error, data, fetchMore } = useQuery(GET_POKEMON, {
    variables: {
      limit: 9,
      offset: 0,
    },
  });

  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
  });

  useEffect(() => {
    if (isIntersecting && !isLoadingMore && data?.pokemons?.results?.length) {
      setIsLoadingMore(true);
      fetchMore({
        variables: {
          offset: data?.pokemons?.results?.length,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const newResults = fetchMoreResult.pokemons?.results || [];
          const newExtendedResults =
            fetchMoreResult.pokemons?.extended_results || [];
          const prevResults = previousResult.pokemons?.results || [];
          const prevExtendedResults =
            previousResult.pokemons?.extended_results || [];

          return {
            pokemons: {
              ...fetchMoreResult.pokemons,
              results: [...prevResults, ...newResults],
              extended_results: [...prevExtendedResults, ...newExtendedResults],
            },
          };
        },
      }).then(() => {
        setIsLoadingMore(false);
      });
    }
  }, [
    data?.pokemons?.results?.length,
    fetchMore,
    isIntersecting,
    isLoadingMore,
  ]);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <p>Error : {error.message}</p>;
  }

  return (
    <>
      {data?.pokemons?.results && (
        <>
          <ul css={styles.PokemonList}>
            {data.pokemons.results.map(({ name, id, dreamworld }, i) => {
              const extendedResults = data.pokemons?.extended_results![i];
              const { weight, height } = extendedResults || {
                weight: 0,
                height: 0,
              };

              return (
                <PokemonListItem
                  key={id}
                  id={id!}
                  name={name}
                  dreamworldUrl={dreamworld!}
                  weight={weight}
                  height={height}
                />
              );
            })}
          </ul>
          <div css={styles.IntersectingLoadMoreDiv} ref={ref}>
            {isLoadingMore && <Spinner />}
          </div>
        </>
      )}
    </>
  );
}
