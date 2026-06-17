// --------------------------------------------------------

import type { MangaRouteKey } from "@/config/routes";
import type {
	MangaAllQueryVariables,
	PopularMangaQueryVariables,
	PopularManhwaQueryVariables,
	TrendingMangaBannerQueryVariables,
	TrendingMangaQueryVariables,
} from "@/gql/graphql";
import { DEFAULT_PAGINATION_VARIABLES, PAGE_DEFAULTS } from "../../constants";
import type { RouteFetchers } from "../../types/route-fetchers";
import { fetchManga } from "./fetch-manga";
import type { MangaQueryMap } from "./manga-queries";

// --------------------------------------------------------

const fetchAllManga = (v: MangaAllQueryVariables = {}) => {
	const variables = {
		...DEFAULT_PAGINATION_VARIABLES,
		bannerPerPage: PAGE_DEFAULTS.BANNER_PER_PAGE,
		...v,
	} satisfies MangaAllQueryVariables;

	return fetchManga("all", { variables });
};

// ---------------------

const fetchPopularManga = (v: PopularMangaQueryVariables = {}) => {
	const variables = {
		...DEFAULT_PAGINATION_VARIABLES,
		...v,
	} satisfies PopularMangaQueryVariables;

	return fetchManga("popular", { variables });
};

// ---------------------

const fetchPopularManhwa = (v: PopularManhwaQueryVariables = {}) => {
	const variables = {
		...DEFAULT_PAGINATION_VARIABLES,
		...v,
	} satisfies PopularManhwaQueryVariables;

	return fetchManga("popularManhwa", { variables });
};

// ---------------------

const TRENDING_ROUTE_KEY = "trending" satisfies MangaRouteKey;
type TrendingMangaQueryType = keyof MangaQueryMap["trending"];

// ---------------------

const fetchTrendingMangaBanner = (
	v: TrendingMangaBannerQueryVariables = {}
) => {
	const variables = {
		...DEFAULT_PAGINATION_VARIABLES,
		...v,
	} satisfies TrendingMangaBannerQueryVariables;

	const dataType = "banner" satisfies TrendingMangaQueryType;

	return fetchManga<typeof TRENDING_ROUTE_KEY, typeof dataType>(
		TRENDING_ROUTE_KEY,
		{
			dataType,
			variables,
		}
	);
};

// ---------------------

const fetchTrendingMangaCard = (v: TrendingMangaQueryVariables = {}) => {
	const variables = {
		...DEFAULT_PAGINATION_VARIABLES,
		...v,
	} satisfies TrendingMangaQueryVariables;

	const dataType = "card" satisfies TrendingMangaQueryType;

	return fetchManga<typeof TRENDING_ROUTE_KEY, typeof dataType>(
		TRENDING_ROUTE_KEY,
		{
			dataType,
			variables,
		}
	);
};

// --------------------------------------------------------

const _contractCheck = {
	all: fetchAllManga,
	popular: fetchPopularManga,
	popularManhwa: fetchPopularManhwa,
	trending: {
		banner: fetchTrendingMangaBanner,
		card: fetchTrendingMangaCard,
	},
} as const satisfies RouteFetchers<MangaRouteKey, MangaQueryMap>;

// --------------------------------------------------------

export {
	fetchAllManga,
	fetchPopularManga,
	fetchPopularManhwa,
	fetchTrendingMangaBanner,
	fetchTrendingMangaCard,
};

// --------------------------------------------------------
