import { HttpResponse, graphql } from "msw";

const pokeapi = graphql.link("http://localhost:4000");

export const Pokemons = [
  pokeapi.query("Pokemons", () => {
    return HttpResponse.json({
      data: {
        pokemons: {
          count: 1302,
          next: "http://localhost/api/v2/pokemon/?limit=9&offset=9",
          previous: null,
          nextOffset: 9,
          prevOffset: 0,
          params: { limit: 9, offset: 0 },
          results: [
            {
              image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
              id: 1,
              name: "bulbasaur",
              url: "http://localhost/api/v2/pokemon/1/",
              artwork:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
              dreamworld:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
              __typename: "PokemonItem",
            },
            {
              image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
              id: 2,
              name: "ivysaur",
              url: "http://localhost/api/v2/pokemon/2/",
              artwork:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
              dreamworld:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
              __typename: "PokemonItem",
            },
            {
              image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
              id: 3,
              name: "venusaur",
              url: "http://localhost/api/v2/pokemon/3/",
              artwork:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
              dreamworld:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
              __typename: "PokemonItem",
            },
            {
              image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
              id: 4,
              name: "charmander",
              url: "http://localhost/api/v2/pokemon/4/",
              artwork:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
              dreamworld:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg",
              __typename: "PokemonItem",
            },
            {
              image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
              id: 5,
              name: "charmeleon",
              url: "http://localhost/api/v2/pokemon/5/",
              artwork:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
              dreamworld:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg",
              __typename: "PokemonItem",
            },
            {
              image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
              id: 6,
              name: "charizard",
              url: "http://localhost/api/v2/pokemon/6/",
              artwork:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
              dreamworld:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg",
              __typename: "PokemonItem",
            },
            {
              image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
              id: 7,
              name: "squirtle",
              url: "http://localhost/api/v2/pokemon/7/",
              artwork:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
              dreamworld:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg",
              __typename: "PokemonItem",
            },
            {
              image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
              id: 8,
              name: "wartortle",
              url: "http://localhost/api/v2/pokemon/8/",
              artwork:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
              dreamworld:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/8.svg",
              __typename: "PokemonItem",
            },
            {
              image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
              id: 9,
              name: "blastoise",
              url: "http://localhost/api/v2/pokemon/9/",
              artwork:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
              dreamworld:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg",
              __typename: "PokemonItem",
            },
          ],
          extended_results: [
            { id: 1, weight: 69, height: 7, __typename: "Pokemon" },
            { id: 2, weight: 130, height: 10, __typename: "Pokemon" },
            { id: 3, weight: 1000, height: 20, __typename: "Pokemon" },
            { id: 4, weight: 85, height: 6, __typename: "Pokemon" },
            { id: 5, weight: 190, height: 11, __typename: "Pokemon" },
            { id: 6, weight: 905, height: 17, __typename: "Pokemon" },
            { id: 7, weight: 90, height: 5, __typename: "Pokemon" },
            { id: 8, weight: 225, height: 10, __typename: "Pokemon" },
            { id: 9, weight: 855, height: 16, __typename: "Pokemon" },
          ],
          status: true,
          message: "",
          __typename: "PokemonList",
        },
      },
    });
  }),
];
