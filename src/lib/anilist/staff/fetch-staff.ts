// --------------------------------------------------------

import type { StaffRouteKey } from "@/config/routes";
import type { CompoundDataType, FetchArgs } from "../types/fetch";
import { resolveRequestAndSanitize } from "../utils/resolve-request-and-sanitize";
import { STAFF_QUERY_MAP, type StaffQueryMap } from "./staff-queries";

// --------------------------------------------------------

function fetchStaff<
	K extends StaffRouteKey,
	TDataType extends CompoundDataType<K, StaffQueryMap>,
>(...[key, config]: FetchArgs<K, StaffQueryMap, TDataType>) {
	const queryConfig = STAFF_QUERY_MAP[key];
	return resolveRequestAndSanitize(queryConfig, config);
}

// --------------------------------------------------------

export { fetchStaff };

// --------------------------------------------------------
