// --------------------------------------------------------

import type { ResultOf } from "@graphql-typed-document-node/core";
import { requestAniList } from "./client";
import type { QueryType, RouteQueryConfig } from "./queries/types";
import type { CompoundDataType, FetchArgs } from "./types/fetch";

// --------------------------------------------------------

function buildFetcher<TMap extends Record<string, RouteQueryConfig>>(
	queryMap: TMap
) {
	return function fetcher<
		K extends keyof TMap extends string ? keyof TMap : never,
		TDataType extends CompoundDataType<K, TMap>,
	>(...[key, config]: FetchArgs<K, TMap, TDataType>) {
		const isCompound =
			config != null &&
			typeof config === "object" &&
			"dataType" in config &&
			typeof config.dataType === "string";

		const hasVariables =
			config != null &&
			typeof config === "object" &&
			"variables" in config;

		const queryConfig = queryMap[key] as NonNullable<TMap[K]>;

		const query = (
			isCompound ? queryConfig[config.dataType] : queryConfig
		) as NonNullable<QueryType<typeof queryConfig, typeof config>>;

		const variables = (hasVariables ? config.variables : {}) as Record<
			string,
			unknown
		>;

		return requestAniList({ query, variables }) as Promise<
			ResultOf<QueryType<TMap[K], typeof config>>
		>;
	};
}

// --------------------------------------------------------

export { buildFetcher };

// --------------------------------------------------------
