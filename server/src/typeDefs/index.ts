import BaseList from "./baseList.ts";
import BaseName from "./baseName.ts";
import BaseResponse from "./baseResponse.ts";
import Ability from "./pokemon/ability.ts";
import GameIndex from "./pokemon/gameIndex.ts";
import HeldItem from "./pokemon/heldItem.ts";
import Move from "./pokemon/move.ts";
import Pokemon from "./pokemon/pokemon.ts";
import Sprite from "./pokemon/sprite.ts";
import Stat from "./pokemon/stat.ts";
import Type from "./pokemon/type.ts";
import VersionDetail from "./pokemon/versionDetail.ts";
import VersionGroupDetail from "./pokemon/versionGroupDetail.ts";
import PokemonItem from "./pokemonItem.ts";
import PokemonList from "./pokemonList.ts";
import queries from "./queries/index.ts";

const typeDefs = `
scalar JSON
scalar JSONObject
${BaseResponse.typeDef}
${BaseList.typeDef}
${Ability.typeDef}
${GameIndex.typeDef}
${VersionDetail.typeDef}
${HeldItem.typeDef}
${VersionGroupDetail.typeDef}
${Move.typeDef}
${Sprite.typeDef}
${Stat.typeDef}
${Type.typeDef}
${BaseName.typeDef}
${Pokemon.typeDef}
${PokemonItem.typeDef}
${PokemonList.typeDef}
${queries.typeDef}
`;

export default typeDefs;
