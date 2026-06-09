// --------------------------------------------------------

import type { TypedDocumentString } from "@/gql/graphql";

// --------------------------------------------------------

export type RouteQuery = TypedDocumentString<unknown, Record<string, unknown>>;
export type RouteQueryConfig =
	| RouteQuery
	| { card: RouteQuery; banner?: RouteQuery };

// ---------------------

export type QueryMap<RouteKey extends string> = Record<
	RouteKey,
	RouteQueryConfig
>;

// --------------------------------------------------------
