// --------------------------------------------------------

import type { CharacterRouteKey } from "@/config/routes";
import type { CompoundDataType, FetchArgs } from "../types/fetch";
import { resolveAndRequest } from "../utils/resolve-and-request";
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
	return resolveAndRequest(queryConfig, config);
}

// --------------------------------------------------------

export { fetchCharacter };

// --------------------------------------------------------
