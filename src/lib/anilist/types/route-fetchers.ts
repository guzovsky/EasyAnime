// --------------------------------------------------------

import type { ResultOf } from "@graphql-typed-document-node/core";
import type {
	CompoundRouteQuery,
	QueryVariables,
	RouteQueryMap,
} from "../queries/types";

// --------------------------------------------------------

export type RouteFetchers<
	TRouteKey extends string,
	TQueryMap extends RouteQueryMap<TRouteKey>,
> = {
	[K in TRouteKey]: TQueryMap[K] extends infer Q extends CompoundRouteQuery
		? {
				[QKey in keyof Q]: (
					v: QueryVariables<Q[QKey]>
				) => Promise<ResultOf<Q[QKey]>>;
			}
		: (v: QueryVariables<TQueryMap[K]>) => Promise<ResultOf<TQueryMap[K]>>;
};

// --------------------------------------------------------
