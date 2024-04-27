# Pokedex

Fun little project to test out some ideas using the [PokeAPI GraphQL API](https://github.com/PokeAPI/pokeapi?tab=readme-ov-file).

<p align="center" style="padding:16px;">
  <img src="./docs/pokedex.png" alt="Pokedex" />
</p>

## Contents

- [Prerequisites](#prerequisites)
- [GrapQL Console](#grapql-console)
- [Automatic GQL typing based on queries used + Schema](#automatic-gql-typing-based-on-queries-used-+-schema)
- [React + TypeScript + Vite](#react-+-typescript-+-vite)

## Prerequisites

- Follow the docker compose steps for: [PokeAPI](https://github.com/PokeAPI/pokeapi?tab=readme-ov-file)
- I have the folder one directory out: `../pokeapi`
- See the `npm run docker:start` script for more info

## Quick Start

1. `npm i`
2. `npm start`

## GrapQL Console

1. ensure docker is running
2. `npm run docker:start`
3. `http:localhost:8080` - console endpoint
4. password: `pokemon`

- `http://localhost:8080/v1/graphql`: gql endpoint

## Server

### Automatic GQL typing based on queries used + Schema

Followed this: [Generating types from a GraphQL schema](https://www.apollographql.com/docs/apollo-server/workflow/generate-types/)
and this [Codegen Resolvers](https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-resolvers)

Uses `schema.grapqhl` to generate server types. In order to add more resolvers etc modify schema.graqphl

```sh
"codegen:server": "graphql-codegen --config ./server/codegen.ts",
```

> Note: Extra types are included incase I want to extend the functionality later.

## Client

### Automatic GQL typing based on queries used + Schema

> Note: using a custom apollo-server config now so this will get changed.

Uses: [GraphQL-Codegen](https://the-guild.dev/graphql/codegen/docs/config-reference)

```sh
  "codegen:client": "graphql-codegen -w",
  "codegen:compile": "graphql-codegen"
```

Instead of `import { gql } from apollo` you import the generated version from `"./src/__generated__/gql.ts"`.

- To make this easier I have aliased it as `"gql": ["./src/__generated__/gql.ts"]` in `tsconfig.json`.
  This also requires the `vite-tsconfig-paths` plugin to work.

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Todo

- [ ] pagination
  - May need to write custom server logic to compose grapqh data together.
- [ ] search?
- [ ] 3d pokemon viewer
