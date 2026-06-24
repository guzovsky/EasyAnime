// --------------------------------------------------------

import type { StudioRouteKey } from "@/config/routes";
import type {
	MostFavoritedStudiosQueryVariables,
	StudioAllQueryVariables,
} from "@/gql/graphql";
import { DEFAULT_STUDIO_VARIABLES } from "../constants";
import type { RouteFetchers } from "../types/route-fetchers";
import { fetchStudio } from "./fetcher";
import type { StudioRouteQueryMap } from "./route-queries";

// --------------------------------------------------------

const fetchAllStudio = (v: StudioAllQueryVariables = {}) => {
	const variables = {
		...DEFAULT_STUDIO_VARIABLES,
		...v,
	} satisfies Required<StudioAllQueryVariables>;

	return fetchStudio("all", { variables });
};

// ---------------------

const fetchMostFavoritedStudios = (
	v: MostFavoritedStudiosQueryVariables = {}
) => {
	const variables = {
		...DEFAULT_STUDIO_VARIABLES,
		...v,
	} satisfies Required<MostFavoritedStudiosQueryVariables>;

	return fetchStudio("mostFavorited", { variables });
};

// --------------------------------------------------------

const _contractCheck = {
	all: fetchAllStudio,
	mostFavorited: fetchMostFavoritedStudios,
} as const satisfies RouteFetchers<StudioRouteKey, StudioRouteQueryMap>;

// --------------------------------------------------------

export { fetchAllStudio, fetchMostFavoritedStudios };

// --------------------------------------------------------
