// --------------------------------------------------------

import type { CharacterRouteKey } from "@/config/routes";
import type {
	BirthdayCharactersQueryVariables,
	CharacterAllQueryVariables,
	MostFavoritedCharactersQueryVariables,
} from "@/gql/graphql";
import { DEFAULT_PAGINATION_VARIABLES } from "../constants";
import type { RouteFetchers } from "../types/route-fetchers";
import type { CharacterQueryMap } from "./character-queries";
import { fetchCharacter } from "./fetch-character";

// --------------------------------------------------------

const fetchAllCharacters = (v: CharacterAllQueryVariables = {}) => {
	const variables = {
		...DEFAULT_PAGINATION_VARIABLES,
		...v,
	} satisfies CharacterAllQueryVariables;

	return fetchCharacter("all", { variables });
};

// ---------------------

const fetchBirthdayCharacters = (v: BirthdayCharactersQueryVariables = {}) => {
	const variables = {
		...DEFAULT_PAGINATION_VARIABLES,
		...v,
	} satisfies BirthdayCharactersQueryVariables;

	return fetchCharacter("birthday", { variables });
};

// ---------------------

const fetchMostFavoritedCharacters = (
	v: MostFavoritedCharactersQueryVariables = {}
) => {
	const variables = {
		...DEFAULT_PAGINATION_VARIABLES,
		...v,
	} satisfies MostFavoritedCharactersQueryVariables;

	return fetchCharacter("mostFavorited", { variables });
};

// --------------------------------------------------------

const _contractCheck = {
	all: fetchAllCharacters,
	birthday: fetchBirthdayCharacters,
	mostFavorited: fetchMostFavoritedCharacters,
} as const satisfies RouteFetchers<CharacterRouteKey, CharacterQueryMap>;

// --------------------------------------------------------

export {
	fetchAllCharacters,
	fetchBirthdayCharacters,
	fetchMostFavoritedCharacters,
};

// --------------------------------------------------------
