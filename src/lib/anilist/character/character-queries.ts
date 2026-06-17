// --------------------------------------------------------

import type { CharacterRouteKey } from "@/config/routes";
import {
	BirthdayCharactersDocument,
	CharacterAllDocument,
	MostFavoritedCharactersDocument,
} from "@/gql/graphql";
import type { QueryMap } from "../queries/types";

// --------------------------------------------------------

const CHARACTER_QUERY_MAP = {
	all: CharacterAllDocument,
	birthday: BirthdayCharactersDocument,
	mostFavorited: MostFavoritedCharactersDocument,
} as const satisfies QueryMap<CharacterRouteKey>;

type CharacterQueryMap = typeof CHARACTER_QUERY_MAP;

// --------------------------------------------------------

export type { CharacterQueryMap };
export { CHARACTER_QUERY_MAP };

// --------------------------------------------------------
