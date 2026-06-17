// --------------------------------------------------------

import type { MangaRouteKey } from "@/config/routes";
import {
	MangaAllDocument,
	PopularMangaDocument,
	PopularManhwaDocument,
	TrendingMangaBannerDocument,
	TrendingMangaDocument,
} from "@/gql/graphql";
import type { QueryMap } from "../../queries/types";

// --------------------------------------------------------

const MANGA_QUERY_MAP = {
	all: MangaAllDocument,
	trending: {
		card: TrendingMangaDocument,
		banner: TrendingMangaBannerDocument,
	},
	popular: PopularMangaDocument,
	popularManhwa: PopularManhwaDocument,
} as const satisfies QueryMap<MangaRouteKey>;

type MangaQueryMap = typeof MANGA_QUERY_MAP;

// --------------------------------------------------------

export type { MangaQueryMap };
export { MANGA_QUERY_MAP };

// --------------------------------------------------------
