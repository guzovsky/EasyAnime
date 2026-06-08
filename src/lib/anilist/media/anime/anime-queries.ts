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
import type { RouteQueryConfig } from "../types/route-query";

// --------------------------------------------------------

const ANIME_QUERY_MAP = {
	all: AnimeAllDocument,
	trending: {
		card: TrendingAnimeDocument,
		banner: TrendingAnimeBannerDocument,
	},
	popular: PopularAnimeDocument,
	popularThisSeason: PopularThisSeasonAnimeDocument,
	upcoming: UpcomingAnimeDocument,
} as const satisfies Record<AnimeRouteKey, RouteQueryConfig>;

// --------------------------------------------------------

export { ANIME_QUERY_MAP };

// --------------------------------------------------------
