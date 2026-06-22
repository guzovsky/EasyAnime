// --------------------------------------------------------

import type { StaffRouteKey } from "@/config/routes";
import type {
	BirthdayStaffsQueryVariables,
	MostFavoritedStaffsQueryVariables,
	StaffAllQueryVariables,
} from "@/gql/graphql";
import { DEFAULT_PAGINATION_VARIABLES } from "../constants";
import type { RouteFetchers } from "../types/route-fetchers";
import { fetchStaff } from "./fetcher";
import type { StaffRouteQueryMap } from "./route-queries";

// --------------------------------------------------------

const fetchAllStaff = (v: StaffAllQueryVariables = {}) => {
	const variables = {
		...DEFAULT_PAGINATION_VARIABLES,
		...v,
	} satisfies Required<StaffAllQueryVariables>;

	return fetchStaff("all", { variables });
};

// ---------------------

const fetchBirthdayStaffs = (v: BirthdayStaffsQueryVariables = {}) => {
	const variables = {
		...DEFAULT_PAGINATION_VARIABLES,
		...v,
	} satisfies Required<BirthdayStaffsQueryVariables>;

	return fetchStaff("birthday", { variables });
};

// ---------------------

const fetchMostFavoritedStaffs = (
	v: MostFavoritedStaffsQueryVariables = {}
) => {
	const variables = {
		...DEFAULT_PAGINATION_VARIABLES,
		...v,
	} satisfies Required<MostFavoritedStaffsQueryVariables>;

	return fetchStaff("mostFavorited", { variables });
};

// --------------------------------------------------------

const _contractCheck = {
	all: fetchAllStaff,
	birthday: fetchBirthdayStaffs,
	mostFavorited: fetchMostFavoritedStaffs,
} as const satisfies RouteFetchers<StaffRouteKey, StaffRouteQueryMap>;

// --------------------------------------------------------

export { fetchAllStaff, fetchBirthdayStaffs, fetchMostFavoritedStaffs };

// --------------------------------------------------------
