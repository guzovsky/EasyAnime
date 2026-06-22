// -------------------------------------------------- Fetch

import type {
	QuickSearchQueryVariables,
	StudioAllQueryVariables,
} from "@/gql/graphql";

// ---------------------- URL

const ANILIST_GRAPHQL_URL = "https://graphql.anilist.co";

// -------------------- Error

const NETWORK_FAILURE = "Network request to AniList failed.";
const INVALID_JSON = "AniList returned invalid JSON.";
const GRAPHQL_FAILURE = "AniList GraphQL request failed.";
const NO_DATA = "AniList response did not include data.";
const NON_2XX_STATUS = (responseStatus: number) =>
	`AniList responded with status ${responseStatus}.` as const;

const ANILIST_ERRORS = {
	NETWORK_FAILURE,
	INVALID_JSON,
	GRAPHQL_FAILURE,
	NO_DATA,
	NON_2XX_STATUS,
} as const;

// ----------------------------------------------- Defaults

const PAGE_DEFAULTS = {
	PAGE: 1,
	PER_PAGE: 10,
	BANNER_PER_PAGE: 5,
} as const;

const DEFAULT_PAGINATION_VARIABLES = {
	page: PAGE_DEFAULTS.PAGE,
	perPage: PAGE_DEFAULTS.PER_PAGE,
} as const;

// ---------------------

const DEFAULT_STUDIO_VARIABLES = {
	...DEFAULT_PAGINATION_VARIABLES,
	mediaIsMain: true,
	mediaPage: 1,
	mediaPerPage: 2,
	mediaSort: "POPULARITY_DESC",
} as const satisfies Required<StudioAllQueryVariables>;

// ---------------------

const QUICK_SEARCH_DEFAULTS = {
	page: 1,
	perPage: 4,
	animeSort: "POPULARITY_DESC",
	mangaSort: "POPULARITY_DESC",
	characterSort: "FAVOURITES_DESC",
	staffSort: "FAVOURITES_DESC",
	studioSort: "FAVOURITES_DESC",
	studiosMediaSort: "POPULARITY_DESC",
	studiosMediaPage: DEFAULT_STUDIO_VARIABLES.mediaPage,
	studiosMediaPerPage: DEFAULT_STUDIO_VARIABLES.mediaPerPage,
	studiosMediaIsMain: true,
} as const satisfies Omit<Required<QuickSearchQueryVariables>, "search">;

// ------------------------------------------------ Exports

export {
	ANILIST_ERRORS,
	ANILIST_GRAPHQL_URL,
	DEFAULT_PAGINATION_VARIABLES,
	DEFAULT_STUDIO_VARIABLES,
	PAGE_DEFAULTS,
	QUICK_SEARCH_DEFAULTS,
};

// --------------------------------------------------------
