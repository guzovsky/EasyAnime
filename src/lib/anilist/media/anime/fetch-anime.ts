// --------------------------------------------------------

import type { AnimeRouteKey } from "@/config/routes";
import type { CompoundDataType, FetchArgs } from "../../types/fetch";
import { resolveRequestAndSanitize } from "../../utils/resolve-request-and-sanitize";
import { ANIME_QUERY_MAP, type AnimeQueryMap } from "./anime-queries";

// --------------------------------------------------------

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
