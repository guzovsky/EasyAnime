// --------------------------------------------------------

import type { CharacterRouteKey } from "@/config/routes";
import type { CompoundDataType, FetchArgs } from "../types/fetch";
import { resolveRequestAndSanitize } from "../utils/resolve-request-and-sanitize";
import {
	CHARACTER_QUERY_MAP,
	type CharacterQueryMap,
} from "./character-queries";

// --------------------------------------------------------

function fetchCharacter<
	K extends CharacterRouteKey,
	TDataType extends CompoundDataType<K, CharacterQueryMap>,
>(...[key, config]: FetchArgs<K, CharacterQueryMap, TDataType>) {
	const queryConfig = CHARACTER_QUERY_MAP[key];
	return resolveRequestAndSanitize(queryConfig, config);
}

// --------------------------------------------------------

export { fetchCharacter };

// --------------------------------------------------------
