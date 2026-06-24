// --------------------------------------------------------

import type {
	CompoundRouteQuery,
	QueryVariables,
	RouteQueryConfig,
	RouteQueryMap,
} from "../queries/types";

// --------------------------------------------------------

type CompoundConfig<
	K extends string,
	TMap extends RouteQueryMap<K>,
> = TMap[K] extends infer Q extends CompoundRouteQuery
	? { dataType: keyof Q }
	: never;

// ---------------------

type CompoundDataType<K extends string, TMap extends RouteQueryMap<K>> =
	CompoundConfig<K, TMap> extends never ? never : keyof TMap[K];

// --------------------------------------------------------

type FetchConfig<
	K extends string,
	TMap extends RouteQueryMap<K>,
	TDataType extends CompoundDataType<K, TMap>,
> = TMap[K] extends infer Q extends RouteQueryConfig
	? CompoundConfig<K, TMap> extends never
		? { variables?: QueryVariables<Q> }
		: CompoundConfig<K, TMap> extends {
					dataType: infer T extends keyof Q;
				}
			? { dataType: TDataType; variables?: QueryVariables<Q[T]> }
			: never
	: never;

// ---------------------

type FetchArgs<
	K extends string,
	TMap extends RouteQueryMap<K>,
	TDataType extends CompoundDataType<K, TMap>,
> =
	CompoundConfig<K, TMap> extends never
		? [key: K, config?: FetchConfig<K, TMap, never>]
		: [key: K, config: FetchConfig<K, TMap, TDataType>];

// --------------------------------------------------------

export type { CompoundDataType, FetchArgs, FetchConfig };

// --------------------------------------------------------
