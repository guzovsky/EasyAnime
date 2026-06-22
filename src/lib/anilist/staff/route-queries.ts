// --------------------------------------------------------

import type { StaffRouteKey } from "@/config/routes";
import {
	BirthdayStaffsDocument,
	MostFavoritedStaffsDocument,
	StaffAllDocument,
} from "@/gql/graphql";
import type { RouteQueryMap } from "../queries/types";

// --------------------------------------------------------

const STAFF_ROUTE_QUERY_MAP = {
	all: StaffAllDocument,
	birthday: BirthdayStaffsDocument,
	mostFavorited: MostFavoritedStaffsDocument,
} as const satisfies RouteQueryMap<StaffRouteKey>;

type StaffRouteQueryMap = typeof STAFF_ROUTE_QUERY_MAP;

// --------------------------------------------------------

export type { StaffRouteQueryMap };
export { STAFF_ROUTE_QUERY_MAP };

// --------------------------------------------------------
