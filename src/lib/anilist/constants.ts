// -------------------------------------------------- Fetch

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

// ------------------------------------------------ Exports

export { ANILIST_ERRORS, ANILIST_GRAPHQL_URL, PAGE_DEFAULTS };

// --------------------------------------------------------
