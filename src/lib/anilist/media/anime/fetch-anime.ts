// --------------------------------------------------------

import type { AnimeRouteKey } from "@/config/routes";
import type { CompoundDataType, FetchArgs } from "../../types/fetch";
import { resolveRequestAndSanitize } from "../../utils/resolve-request-and-sanitize";
import { ANIME_QUERY_MAP } from "./anime-queries";

// --------------------------------------------------------

type AnimeQueryMap = typeof ANIME_QUERY_MAP;

// ---------------------

function fetchAnime<
	K extends AnimeRouteKey,
	TDataType extends CompoundDataType<K, AnimeQueryMap>,
>(...[key, config]: FetchArgs<K, AnimeQueryMap, TDataType>) {
	const queryConfig = ANIME_QUERY_MAP[key];
	return resolveRequestAndSanitize(queryConfig, config);
}

// --------------------------------------------------------

export { fetchAnime };

// --------------------------------------------------------
