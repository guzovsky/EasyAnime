// --------------------------------------------------------

import type { AnimeRouteKey } from "@/config/routes";
import {
	AnimeAllDocument,
	PopularAnimeDocument,
	PopularThisSeasonAnimeDocument,
	TrendingAnimeBannerDocument,
	TrendingAnimeDocument,
	UpcomingAnimeDocument,
} from "@/gql/graphql";
import type { RouteQueryMap } from "../../queries/types";

// --------------------------------------------------------

const ANIME_ROUTE_QUERY_MAP = {
	all: AnimeAllDocument,
	trending: {
		card: TrendingAnimeDocument,
		banner: TrendingAnimeBannerDocument,
	},
	popular: PopularAnimeDocument,
	popularThisSeason: PopularThisSeasonAnimeDocument,
	upcoming: UpcomingAnimeDocument,
} as const satisfies RouteQueryMap<AnimeRouteKey>;

type AnimeRouteQueryMap = typeof ANIME_ROUTE_QUERY_MAP;

// --------------------------------------------------------

export type { AnimeRouteQueryMap };
export { ANIME_ROUTE_QUERY_MAP };

// --------------------------------------------------------
