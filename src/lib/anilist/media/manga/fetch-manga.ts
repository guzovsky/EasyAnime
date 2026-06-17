// --------------------------------------------------------

import type { MangaRouteKey } from "@/config/routes";
import type { CompoundDataType, FetchArgs } from "../../types/fetch";
import { resolveRequestAndSanitize } from "../../utils/resolve-request-and-sanitize";
import { MANGA_QUERY_MAP, type MangaQueryMap } from "./manga-queries";

// --------------------------------------------------------

function fetchManga<
	K extends MangaRouteKey,
	TDataType extends CompoundDataType<K, MangaQueryMap>,
>(...[key, config]: FetchArgs<K, MangaQueryMap, TDataType>) {
	const queryConfig = MANGA_QUERY_MAP[key];
	return resolveRequestAndSanitize(queryConfig, config);
}

// --------------------------------------------------------

export { fetchManga };

// --------------------------------------------------------
