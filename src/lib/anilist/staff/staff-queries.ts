// --------------------------------------------------------

import type { StaffRouteKey } from "@/config/routes";
import {
	BirthdayStaffsDocument,
	MostFavoritedStaffsDocument,
	StaffAllDocument,
} from "@/gql/graphql";
import type { QueryMap } from "../queries/types";

// --------------------------------------------------------

const STAFF_QUERY_MAP = {
	all: StaffAllDocument,
	birthday: BirthdayStaffsDocument,
	mostFavorited: MostFavoritedStaffsDocument,
} as const satisfies QueryMap<StaffRouteKey>;

type StaffQueryMap = typeof STAFF_QUERY_MAP;

// --------------------------------------------------------

export type { StaffQueryMap };
export { STAFF_QUERY_MAP };

// --------------------------------------------------------
