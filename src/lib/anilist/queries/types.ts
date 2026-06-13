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

export type QueryVariables<T> =
	T extends TypedDocumentString<unknown, infer V> ? V : never;

// --------------------------------------------------------

export type QueryType<TQuery, TConfig> = TQuery extends CompoundRouteQuery
	? TConfig extends { dataType: keyof TQuery }
		? TQuery[TConfig["dataType"]]
		: never
	: TQuery extends RouteQuery
		? TQuery
		: never;

// --------------------------------------------------------
