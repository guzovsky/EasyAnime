// --------------------------------------------------------

import type { CharacterRouteKey } from "@/config/routes";
import {
	BirthdayCharactersDocument,
	CharacterAllDocument,
	MostFavoritedCharactersDocument,
} from "@/gql/graphql";
import type { RouteQueryMap } from "../queries/types";

// --------------------------------------------------------

const CHARACTER_ROUTE_QUERY_MAP = {
	all: CharacterAllDocument,
	birthday: BirthdayCharactersDocument,
	mostFavorited: MostFavoritedCharactersDocument,
} as const satisfies RouteQueryMap<CharacterRouteKey>;

type CharacterRouteQueryMap = typeof CHARACTER_ROUTE_QUERY_MAP;

// --------------------------------------------------------

export type { CharacterRouteQueryMap };
export { CHARACTER_ROUTE_QUERY_MAP };

// --------------------------------------------------------
