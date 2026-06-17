// --------------------------------------------------------

import type { ResultOf } from "@graphql-typed-document-node/core";
import type { AnimeRouteKey } from "@/config/routes";
import type {
	AnimeAllQueryVariables,
	PopularAnimeQueryVariables,
	PopularThisSeasonAnimeQueryVariables,
	TrendingAnimeBannerQueryVariables,
	TrendingAnimeQueryVariables,
	UpcomingAnimeQueryVariables,
} from "@/gql/graphql";
import { PAGE_DEFAULTS } from "../../constants";
import type { CompoundRouteQuery, QueryVariables } from "../../queries/types";
import {
	getAniListCurrentSeason,
	getAniListNextSeason,
} from "../../utils/season";
import type { ANIME_QUERY_MAP } from "./anime-queries";
import { fetchAnime } from "./fetch-anime";

// --------------------------------------------------------

const fetchAllAnime = (v: AnimeAllQueryVariables = {}) => {
	const { season, year } = getAniListCurrentSeason();
	const { season: nextSeason, year: nextSeasonYear } = getAniListNextSeason({
		season,
		year,
	});

	const variables = {
		page: PAGE_DEFAULTS.PAGE,
		perPage: PAGE_DEFAULTS.PER_PAGE,
		bannerPerPage: PAGE_DEFAULTS.BANNER_PER_PAGE,
		popularThisSeasonSeason: season,
		popularThisSeasonSeasonYear: year,
		upcomingSeason: nextSeason,
		upcomingSeasonYear: nextSeasonYear,
		...v,
	} satisfies AnimeAllQueryVariables;

	return fetchAnime("all", { variables });
};

// ---------------------

const fetchPopularAnime = (v: PopularAnimeQueryVariables = {}) => {
	const variables = {
		page: PAGE_DEFAULTS.PAGE,
		perPage: PAGE_DEFAULTS.PER_PAGE,
		...v,
	} satisfies PopularAnimeQueryVariables;

	return fetchAnime("popular", { variables });
};

// ---------------------

const fetchPopularThisSeasonAnime = (
	v: PopularThisSeasonAnimeQueryVariables = {}
) => {
	const { season, year } = getAniListCurrentSeason();

	const variables = {
		page: PAGE_DEFAULTS.PAGE,
		perPage: PAGE_DEFAULTS.PER_PAGE,
		season,
		seasonYear: year,
		...v,
	} satisfies PopularThisSeasonAnimeQueryVariables;

	return fetchAnime("popularThisSeason", { variables });
};

// ---------------------

const fetchUpcomingAnime = (v: UpcomingAnimeQueryVariables = {}) => {
	const { season, year } = getAniListNextSeason();

	const variables = {
		page: PAGE_DEFAULTS.PAGE,
		perPage: PAGE_DEFAULTS.PER_PAGE,
		season,
		seasonYear: year,
		...v,
	} satisfies UpcomingAnimeQueryVariables;

	return fetchAnime("upcoming", { variables });
};

// ---------------------

const TRENDING_ROUTE_KEY = "trending" satisfies AnimeRouteKey;
type TrendingAnimeQueryType = keyof typeof ANIME_QUERY_MAP.trending;

// ---------------------

const fetchTrendingAnimeBanner = (
	v: TrendingAnimeBannerQueryVariables = {}
) => {
	const variables = {
		page: PAGE_DEFAULTS.PAGE,
		perPage: PAGE_DEFAULTS.BANNER_PER_PAGE,
		...v,
	} satisfies TrendingAnimeBannerQueryVariables;

	const dataType = "banner" satisfies TrendingAnimeQueryType;

	return fetchAnime<typeof TRENDING_ROUTE_KEY, typeof dataType>(
		TRENDING_ROUTE_KEY,
		{
			dataType,
			variables,
		}
	);
};

// ---------------------

const fetchTrendingAnimeCard = (v: TrendingAnimeQueryVariables = {}) => {
	const variables = {
		page: PAGE_DEFAULTS.PAGE,
		perPage: PAGE_DEFAULTS.PER_PAGE,
		...v,
	} satisfies TrendingAnimeQueryVariables;

	const dataType = "card" satisfies TrendingAnimeQueryType;

	return fetchAnime<typeof TRENDING_ROUTE_KEY, typeof dataType>(
		TRENDING_ROUTE_KEY,
		{
			dataType,
			variables,
		}
	);
};

// --------------------------------------------------------

type AnimeFetchersType = {
	[K in AnimeRouteKey]: (typeof ANIME_QUERY_MAP)[K] extends infer Q extends
		CompoundRouteQuery
		? {
				[QKey in keyof Q]: (
					v: QueryVariables<Q[QKey]>
				) => Promise<ResultOf<Q[QKey]>>;
			}
		: (
				v: QueryVariables<(typeof ANIME_QUERY_MAP)[K]>
			) => Promise<ResultOf<(typeof ANIME_QUERY_MAP)[K]>>;
};

// ---------------------

const _contractCheck = {
	all: fetchAllAnime,
	popular: fetchPopularAnime,
	popularThisSeason: fetchPopularThisSeasonAnime,
	upcoming: fetchUpcomingAnime,
	trending: {
		banner: fetchTrendingAnimeBanner,
		card: fetchTrendingAnimeCard,
	},
} as const satisfies AnimeFetchersType;

// --------------------------------------------------------

export {
	fetchAllAnime,
	fetchPopularAnime,
	fetchPopularThisSeasonAnime,
	fetchTrendingAnimeBanner,
	fetchTrendingAnimeCard,
	fetchUpcomingAnime,
};

// --------------------------------------------------------
