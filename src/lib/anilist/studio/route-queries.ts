// --------------------------------------------------------

import type { StudioRouteKey } from "@/config/routes";
import { MostFavoritedStudiosDocument, StudioAllDocument } from "@/gql/graphql";
import type { RouteQueryMap } from "../queries/types";

// --------------------------------------------------------

const STUDIO_ROUTE_QUERY_MAP = {
	all: StudioAllDocument,
	mostFavorited: MostFavoritedStudiosDocument,
} as const satisfies RouteQueryMap<StudioRouteKey>;

type StudioRouteQueryMap = typeof STUDIO_ROUTE_QUERY_MAP;

// --------------------------------------------------------

export type { StudioRouteQueryMap };
export { STUDIO_ROUTE_QUERY_MAP };

// --------------------------------------------------------
