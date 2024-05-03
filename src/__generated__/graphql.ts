/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  JSON: { input: any; output: any; }
  JSONObject: { input: any; output: any; }
};

export type Ability = {
  __typename?: 'Ability';
  ability?: Maybe<BaseName>;
  is_hidden?: Maybe<Scalars['Boolean']['output']>;
  slot?: Maybe<Scalars['Int']['output']>;
};

export type BaseList = {
  __typename?: 'BaseList';
  count?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  next?: Maybe<Scalars['String']['output']>;
  previous?: Maybe<Scalars['String']['output']>;
  results?: Maybe<Array<Maybe<BaseName>>>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type BaseName = {
  __typename?: 'BaseName';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type BaseResponse = {
  __typename?: 'BaseResponse';
  message?: Maybe<Scalars['String']['output']>;
  params?: Maybe<Scalars['JSON']['output']>;
  response?: Maybe<Scalars['JSON']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type GameIndex = {
  __typename?: 'GameIndex';
  game_index?: Maybe<Scalars['Int']['output']>;
  version?: Maybe<BaseName>;
};

export type HeldItem = {
  __typename?: 'HeldItem';
  item?: Maybe<BaseName>;
  version_details?: Maybe<Array<Maybe<VersionDetail>>>;
};

export type Move = {
  __typename?: 'Move';
  move?: Maybe<BaseName>;
  version_group_details?: Maybe<Array<Maybe<VersionGroupDetail>>>;
};

export type Pokemon = {
  __typename?: 'Pokemon';
  abilities: Array<Ability>;
  base_experience?: Maybe<Scalars['Int']['output']>;
  forms: Array<BaseName>;
  game_indices: Array<GameIndex>;
  height: Scalars['Int']['output'];
  held_items: Array<HeldItem>;
  id: Scalars['Int']['output'];
  is_default: Scalars['Boolean']['output'];
  location_area_encounters: Scalars['String']['output'];
  message?: Maybe<Scalars['String']['output']>;
  moves: Array<Move>;
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  species: BaseName;
  sprites: Sprite;
  stats: Array<Stat>;
  status?: Maybe<Scalars['Boolean']['output']>;
  types: Array<Type>;
  weight: Scalars['Int']['output'];
};

export type PokemonItem = {
  __typename?: 'PokemonItem';
  artwork?: Maybe<Scalars['String']['output']>;
  dreamworld?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type PokemonList = {
  __typename?: 'PokemonList';
  count?: Maybe<Scalars['Int']['output']>;
  extended_results: Array<Pokemon>;
  message?: Maybe<Scalars['String']['output']>;
  next?: Maybe<Scalars['String']['output']>;
  nextOffset?: Maybe<Scalars['Int']['output']>;
  params?: Maybe<Scalars['JSON']['output']>;
  prevOffset?: Maybe<Scalars['Int']['output']>;
  previous?: Maybe<Scalars['String']['output']>;
  results: Array<PokemonItem>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type Query = {
  __typename?: 'Query';
  pokemon?: Maybe<Pokemon>;
  pokemons?: Maybe<PokemonList>;
};


export type QueryPokemonArgs = {
  name: Scalars['String']['input'];
};


export type QueryPokemonsArgs = {
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
};

export type Sprite = {
  __typename?: 'Sprite';
  back_default?: Maybe<Scalars['String']['output']>;
  back_female?: Maybe<Scalars['String']['output']>;
  back_shiny?: Maybe<Scalars['String']['output']>;
  back_shiny_female?: Maybe<Scalars['String']['output']>;
  front_default?: Maybe<Scalars['String']['output']>;
  front_female?: Maybe<Scalars['String']['output']>;
  front_shiny?: Maybe<Scalars['String']['output']>;
  front_shiny_female?: Maybe<Scalars['String']['output']>;
};

export type Stat = {
  __typename?: 'Stat';
  base_stat?: Maybe<Scalars['Int']['output']>;
  effort?: Maybe<Scalars['Int']['output']>;
  stat?: Maybe<BaseName>;
};

export type Type = {
  __typename?: 'Type';
  slot?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<BaseName>;
};

export type VersionDetail = {
  __typename?: 'VersionDetail';
  rarity?: Maybe<Scalars['Int']['output']>;
  version?: Maybe<BaseName>;
};

export type VersionGroupDetail = {
  __typename?: 'VersionGroupDetail';
  level_learned_at?: Maybe<Scalars['Int']['output']>;
  move_learn_method?: Maybe<BaseName>;
  version_group?: Maybe<BaseName>;
};

export type PokemonsQueryVariables = Exact<{
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
}>;


export type PokemonsQuery = { __typename?: 'Query', pokemons?: { __typename?: 'PokemonList', count?: number | null, nextOffset?: number | null, prevOffset?: number | null, params?: any | null, status?: boolean | null, message?: string | null, results: Array<{ __typename?: 'PokemonItem', image?: string | null, id?: number | null, name: string, url?: string | null, artwork?: string | null, dreamworld?: string | null }>, extended_results: Array<{ __typename?: 'Pokemon', id: number, weight: number, height: number }> } | null };


export const PokemonsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Pokemons"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pokemons"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"nextOffset"}},{"kind":"Field","name":{"kind":"Name","value":"prevOffset"}},{"kind":"Field","name":{"kind":"Name","value":"params"}},{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"artwork"}},{"kind":"Field","name":{"kind":"Name","value":"dreamworld"}}]}},{"kind":"Field","name":{"kind":"Name","value":"extended_results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<PokemonsQuery, PokemonsQueryVariables>;