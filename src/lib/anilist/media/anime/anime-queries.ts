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
import type { QueryMap } from "../../queries/types";

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
} as const satisfies QueryMap<AnimeRouteKey>;

type AnimeQueryMap = typeof ANIME_QUERY_MAP;

// --------------------------------------------------------

export type { AnimeQueryMap };
export { ANIME_QUERY_MAP };

// --------------------------------------------------------
