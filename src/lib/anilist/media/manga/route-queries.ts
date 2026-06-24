// --------------------------------------------------------

import type { MangaRouteKey } from "@/config/routes";
import {
	MangaAllDocument,
	PopularMangaDocument,
	PopularManhwaDocument,
	TrendingMangaBannerDocument,
	TrendingMangaDocument,
} from "@/gql/graphql";
import type { RouteQueryMap } from "../../queries/types";

// --------------------------------------------------------

const MANGA_ROUTE_QUERY_MAP = {
	all: MangaAllDocument,
	trending: {
		card: TrendingMangaDocument,
		banner: TrendingMangaBannerDocument,
	},
	popular: PopularMangaDocument,
	popularManhwa: PopularManhwaDocument,
} as const satisfies RouteQueryMap<MangaRouteKey>;

type MangaRouteQueryMap = typeof MANGA_ROUTE_QUERY_MAP;

// --------------------------------------------------------

export type { MangaRouteQueryMap };
export { MANGA_ROUTE_QUERY_MAP };

// --------------------------------------------------------
