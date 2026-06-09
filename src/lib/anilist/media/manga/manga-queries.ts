// --------------------------------------------------------

import type { MangaRouteKey } from "@/config/routes";
import {
	MangaAllDocument,
	PopularMangaDocument,
	PopularManhwaDocument,
	TrendingMangaBannerDocument,
	TrendingMangaDocument,
} from "@/gql/graphql";
import type { RouteQueryConfig } from "../../queries/types";

// --------------------------------------------------------

const MANGA_QUERY_MAP = {
	all: MangaAllDocument,
	trending: {
		card: TrendingMangaDocument,
		banner: TrendingMangaBannerDocument,
	},
	popular: PopularMangaDocument,
	popularManhwa: PopularManhwaDocument,
} as const satisfies Record<MangaRouteKey, RouteQueryConfig>;

// --------------------------------------------------------

export { MANGA_QUERY_MAP };

// --------------------------------------------------------
