// --------------------------------------------------------

import type { AnimeRouteKey } from "@/config/routes";
import type {
	AnimeAllQueryVariables,
	PopularAnimeQueryVariables,
	PopularThisSeasonAnimeQueryVariables,
	TrendingAnimeBannerQueryVariables,
	TrendingAnimeQueryVariables,
	UpcomingAnimeQueryVariables,
} from "@/gql/graphql";
import { DEFAULT_PAGINATION_VARIABLES, PAGE_DEFAULTS } from "../../constants";
import type { RouteFetchers } from "../../types/route-fetchers";
import {
	getAniListCurrentSeason,
	getAniListNextSeason,
} from "../../utils/season";
import type { AnimeQueryMap } from "./anime-queries";
import { fetchAnime } from "./fetch-anime";

// --------------------------------------------------------

const fetchAllAnime = (v: AnimeAllQueryVariables = {}) => {
	const { season, year } = getAniListCurrentSeason();
	const { season: nextSeason, year: nextSeasonYear } = getAniListNextSeason({
		season,
		year,
	});

	const variables = {
		...DEFAULT_PAGINATION_VARIABLES,
		bannerPerPage: PAGE_DEFAULTS.BANNER_PER_PAGE,
		popularThisSeasonSeason: season,
		popularThisSeasonSeasonYear: year,
		upcomingSeason: nextSeason,
		upcomingSeasonYear: nextSeasonYear,
		...v,
	} satisfies Required<AnimeAllQueryVariables>;

	return fetchAnime("all", { variables });
};

// ---------------------

const fetchPopularAnime = (v: PopularAnimeQueryVariables = {}) => {
	const variables = {
		...DEFAULT_PAGINATION_VARIABLES,
		...v,
	} satisfies Required<PopularAnimeQueryVariables>;

	return fetchAnime("popular", { variables });
};

// ---------------------

const fetchPopularThisSeasonAnime = (
	v: PopularThisSeasonAnimeQueryVariables = {}
) => {
	const { season, year } = getAniListCurrentSeason();

	const variables = {
		...DEFAULT_PAGINATION_VARIABLES,
		season,
		seasonYear: year,
		...v,
	} satisfies Required<PopularThisSeasonAnimeQueryVariables>;

	return fetchAnime("popularThisSeason", { variables });
};

// ---------------------

const fetchUpcomingAnime = (v: UpcomingAnimeQueryVariables = {}) => {
	const { season, year } = getAniListNextSeason();

	const variables = {
		...DEFAULT_PAGINATION_VARIABLES,
		season,
		seasonYear: year,
		...v,
	} satisfies Required<UpcomingAnimeQueryVariables>;

	return fetchAnime("upcoming", { variables });
};

// ---------------------

const TRENDING_ROUTE_KEY = "trending" satisfies AnimeRouteKey;
type TrendingAnimeQueryType = keyof AnimeQueryMap["trending"];

// ---------------------

const fetchTrendingAnimeBanner = (
	v: TrendingAnimeBannerQueryVariables = {}
) => {
	const variables = {
		...DEFAULT_PAGINATION_VARIABLES,
		...v,
	} satisfies Required<TrendingAnimeBannerQueryVariables>;

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
		...DEFAULT_PAGINATION_VARIABLES,
		...v,
	} satisfies Required<TrendingAnimeQueryVariables>;

	const dataType = "card" satisfies TrendingAnimeQueryType;

	return fetchAnime<typeof TRENDING_ROUTE_KEY, typeof dataType>(
		TRENDING_ROUTE_KEY,
		{
			dataType,
			variables,
		}
	);
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
} as const satisfies RouteFetchers<AnimeRouteKey, AnimeQueryMap>;

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
