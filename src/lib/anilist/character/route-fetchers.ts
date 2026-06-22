// --------------------------------------------------------

import type { CharacterRouteKey } from "@/config/routes";
import type {
	BirthdayCharactersQueryVariables,
	CharacterAllQueryVariables,
	MostFavoritedCharactersQueryVariables,
} from "@/gql/graphql";
import { DEFAULT_PAGINATION_VARIABLES } from "../constants";
import type { RouteFetchers } from "../types/route-fetchers";
import { fetchCharacter } from "./fetcher";
import type { CharacterRouteQueryMap } from "./route-queries";

// --------------------------------------------------------

const fetchAllCharacters = (v: CharacterAllQueryVariables = {}) => {
	const variables = {
		...DEFAULT_PAGINATION_VARIABLES,
		...v,
	} satisfies Required<CharacterAllQueryVariables>;

	return fetchCharacter("all", { variables });
};

// ---------------------

const fetchBirthdayCharacters = (v: BirthdayCharactersQueryVariables = {}) => {
	const variables = {
		...DEFAULT_PAGINATION_VARIABLES,
		...v,
	} satisfies Required<BirthdayCharactersQueryVariables>;

	return fetchCharacter("birthday", { variables });
};

// ---------------------

const fetchMostFavoritedCharacters = (
	v: MostFavoritedCharactersQueryVariables = {}
) => {
	const variables = {
		...DEFAULT_PAGINATION_VARIABLES,
		...v,
	} satisfies Required<MostFavoritedCharactersQueryVariables>;

	return fetchCharacter("mostFavorited", { variables });
};

// --------------------------------------------------------

const _contractCheck = {
	all: fetchAllCharacters,
	birthday: fetchBirthdayCharacters,
	mostFavorited: fetchMostFavoritedCharacters,
} as const satisfies RouteFetchers<CharacterRouteKey, CharacterRouteQueryMap>;

// --------------------------------------------------------

export {
	fetchAllCharacters,
	fetchBirthdayCharacters,
	fetchMostFavoritedCharacters,
};

// --------------------------------------------------------
