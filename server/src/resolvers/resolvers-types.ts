import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T extends PromiseLike<infer U> ? Promise<U | null> : T | null;
export type InputMaybe<T> = T extends PromiseLike<infer U> ? Promise<U | null> : T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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
  extended_results?: Maybe<Array<Pokemon>>;
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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Ability: ResolverTypeWrapper<Ability>;
  BaseList: ResolverTypeWrapper<BaseList>;
  BaseName: ResolverTypeWrapper<BaseName>;
  BaseResponse: ResolverTypeWrapper<BaseResponse>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  GameIndex: ResolverTypeWrapper<GameIndex>;
  HeldItem: ResolverTypeWrapper<HeldItem>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']['output']>;
  Move: ResolverTypeWrapper<Move>;
  Pokemon: ResolverTypeWrapper<Pokemon>;
  PokemonItem: ResolverTypeWrapper<PokemonItem>;
  PokemonList: ResolverTypeWrapper<PokemonList>;
  Query: ResolverTypeWrapper<{}>;
  Sprite: ResolverTypeWrapper<Sprite>;
  Stat: ResolverTypeWrapper<Stat>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Type: ResolverTypeWrapper<Type>;
  VersionDetail: ResolverTypeWrapper<VersionDetail>;
  VersionGroupDetail: ResolverTypeWrapper<VersionGroupDetail>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Ability: Ability;
  BaseList: BaseList;
  BaseName: BaseName;
  BaseResponse: BaseResponse;
  Boolean: Scalars['Boolean']['output'];
  GameIndex: GameIndex;
  HeldItem: HeldItem;
  Int: Scalars['Int']['output'];
  JSON: Scalars['JSON']['output'];
  JSONObject: Scalars['JSONObject']['output'];
  Move: Move;
  Pokemon: Pokemon;
  PokemonItem: PokemonItem;
  PokemonList: PokemonList;
  Query: {};
  Sprite: Sprite;
  Stat: Stat;
  String: Scalars['String']['output'];
  Type: Type;
  VersionDetail: VersionDetail;
  VersionGroupDetail: VersionGroupDetail;
}>;

export type AbilityResolvers<ContextType = any, ParentType extends ResolversParentTypes['Ability'] = ResolversParentTypes['Ability']> = ResolversObject<{
  ability?: Resolver<Maybe<ResolversTypes['BaseName']>, ParentType, ContextType>;
  is_hidden?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  slot?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BaseListResolvers<ContextType = any, ParentType extends ResolversParentTypes['BaseList'] = ResolversParentTypes['BaseList']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  next?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['BaseName']>>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BaseNameResolvers<ContextType = any, ParentType extends ResolversParentTypes['BaseName'] = ResolversParentTypes['BaseName']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BaseResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['BaseResponse'] = ResolversParentTypes['BaseResponse']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  params?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GameIndexResolvers<ContextType = any, ParentType extends ResolversParentTypes['GameIndex'] = ResolversParentTypes['GameIndex']> = ResolversObject<{
  game_index?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['BaseName']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HeldItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeldItem'] = ResolversParentTypes['HeldItem']> = ResolversObject<{
  item?: Resolver<Maybe<ResolversTypes['BaseName']>, ParentType, ContextType>;
  version_details?: Resolver<Maybe<Array<Maybe<ResolversTypes['VersionDetail']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export interface JsonObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
  name: 'JSONObject';
}

export type MoveResolvers<ContextType = any, ParentType extends ResolversParentTypes['Move'] = ResolversParentTypes['Move']> = ResolversObject<{
  move?: Resolver<Maybe<ResolversTypes['BaseName']>, ParentType, ContextType>;
  version_group_details?: Resolver<Maybe<Array<Maybe<ResolversTypes['VersionGroupDetail']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PokemonResolvers<ContextType = any, ParentType extends ResolversParentTypes['Pokemon'] = ResolversParentTypes['Pokemon']> = ResolversObject<{
  abilities?: Resolver<Array<ResolversTypes['Ability']>, ParentType, ContextType>;
  base_experience?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  forms?: Resolver<Array<ResolversTypes['BaseName']>, ParentType, ContextType>;
  game_indices?: Resolver<Array<ResolversTypes['GameIndex']>, ParentType, ContextType>;
  height?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  held_items?: Resolver<Array<ResolversTypes['HeldItem']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  is_default?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  location_area_encounters?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  moves?: Resolver<Array<ResolversTypes['Move']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  species?: Resolver<ResolversTypes['BaseName'], ParentType, ContextType>;
  sprites?: Resolver<ResolversTypes['Sprite'], ParentType, ContextType>;
  stats?: Resolver<Array<ResolversTypes['Stat']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  types?: Resolver<Array<ResolversTypes['Type']>, ParentType, ContextType>;
  weight?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PokemonItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['PokemonItem'] = ResolversParentTypes['PokemonItem']> = ResolversObject<{
  artwork?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dreamworld?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PokemonListResolvers<ContextType = any, ParentType extends ResolversParentTypes['PokemonList'] = ResolversParentTypes['PokemonList']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  extended_results?: Resolver<Maybe<Array<ResolversTypes['Pokemon']>>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  next?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nextOffset?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  params?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  prevOffset?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  results?: Resolver<Array<ResolversTypes['PokemonItem']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  pokemon?: Resolver<Maybe<ResolversTypes['Pokemon']>, ParentType, ContextType, RequireFields<QueryPokemonArgs, 'name'>>;
  pokemons?: Resolver<Maybe<ResolversTypes['PokemonList']>, ParentType, ContextType, RequireFields<QueryPokemonsArgs, 'limit' | 'offset'>>;
}>;

export type SpriteResolvers<ContextType = any, ParentType extends ResolversParentTypes['Sprite'] = ResolversParentTypes['Sprite']> = ResolversObject<{
  back_default?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  back_female?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  back_shiny?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  back_shiny_female?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  front_default?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  front_female?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  front_shiny?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  front_shiny_female?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StatResolvers<ContextType = any, ParentType extends ResolversParentTypes['Stat'] = ResolversParentTypes['Stat']> = ResolversObject<{
  base_stat?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  effort?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  stat?: Resolver<Maybe<ResolversTypes['BaseName']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Type'] = ResolversParentTypes['Type']> = ResolversObject<{
  slot?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['BaseName']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VersionDetailResolvers<ContextType = any, ParentType extends ResolversParentTypes['VersionDetail'] = ResolversParentTypes['VersionDetail']> = ResolversObject<{
  rarity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['BaseName']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VersionGroupDetailResolvers<ContextType = any, ParentType extends ResolversParentTypes['VersionGroupDetail'] = ResolversParentTypes['VersionGroupDetail']> = ResolversObject<{
  level_learned_at?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  move_learn_method?: Resolver<Maybe<ResolversTypes['BaseName']>, ParentType, ContextType>;
  version_group?: Resolver<Maybe<ResolversTypes['BaseName']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Ability?: AbilityResolvers<ContextType>;
  BaseList?: BaseListResolvers<ContextType>;
  BaseName?: BaseNameResolvers<ContextType>;
  BaseResponse?: BaseResponseResolvers<ContextType>;
  GameIndex?: GameIndexResolvers<ContextType>;
  HeldItem?: HeldItemResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  JSONObject?: GraphQLScalarType;
  Move?: MoveResolvers<ContextType>;
  Pokemon?: PokemonResolvers<ContextType>;
  PokemonItem?: PokemonItemResolvers<ContextType>;
  PokemonList?: PokemonListResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Sprite?: SpriteResolvers<ContextType>;
  Stat?: StatResolvers<ContextType>;
  Type?: TypeResolvers<ContextType>;
  VersionDetail?: VersionDetailResolvers<ContextType>;
  VersionGroupDetail?: VersionGroupDetailResolvers<ContextType>;
}>;

