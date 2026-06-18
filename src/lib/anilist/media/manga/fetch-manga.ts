// --------------------------------------------------------

import type { MangaRouteKey } from "@/config/routes";
import type { CompoundDataType, FetchArgs } from "../../types/fetch";
import { resolveAndRequest } from "../../utils/resolve-and-request";
import { MANGA_QUERY_MAP, type MangaQueryMap } from "./manga-queries";

// --------------------------------------------------------

function fetchManga<
	K extends MangaRouteKey,
	TDataType extends CompoundDataType<K, MangaQueryMap>,
>(...[key, config]: FetchArgs<K, MangaQueryMap, TDataType>) {
	const queryConfig = MANGA_QUERY_MAP[key];
	return resolveAndRequest(queryConfig, config);
}

// --------------------------------------------------------

export { fetchManga };

// --------------------------------------------------------
