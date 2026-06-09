// --------------------------------------------------------

import type { TypedDocumentString } from "@/gql/graphql";

// --------------------------------------------------------

export type RouteQuery = TypedDocumentString<unknown, Record<string, unknown>>;

export interface CompoundRouteQuery {
	banner?: RouteQuery;
	card: RouteQuery;
}

export type RouteQueryConfig = RouteQuery | CompoundRouteQuery;

// ---------------------

export type QueryMap<RouteKey extends string> = Record<
	RouteKey,
	RouteQueryConfig
>;

// --------------------------------------------------------
