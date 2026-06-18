// --------------------------------------------------------

import type { AnimeRouteKey } from "@/config/routes";
import type { CompoundDataType, FetchArgs } from "../../types/fetch";
import { resolveAndRequest } from "../../utils/resolve-and-request";
import { ANIME_QUERY_MAP, type AnimeQueryMap } from "./anime-queries";

// --------------------------------------------------------

function fetchAnime<
	K extends AnimeRouteKey,
	TDataType extends CompoundDataType<K, AnimeQueryMap>,
>(...[key, config]: FetchArgs<K, AnimeQueryMap, TDataType>) {
	const queryConfig = ANIME_QUERY_MAP[key];
	return resolveAndRequest(queryConfig, config);
}

// --------------------------------------------------------

export { fetchAnime };

// --------------------------------------------------------
