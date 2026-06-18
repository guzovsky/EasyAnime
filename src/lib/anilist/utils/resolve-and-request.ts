// --------------------------------------------------------

import type { ResultOf } from "@graphql-typed-document-node/core";
import { requestAniList } from "../client";
import type { QueryType, RouteQuery } from "../queries/types";

// --------------------------------------------------------

function resolveAndRequest<TQueryConfig, TConfig>(
	queryConfig: TQueryConfig,
	config: TConfig
) {
	const query = (
		queryConfig && typeof queryConfig === "object" && "card" in queryConfig
			? queryConfig[(config as { dataType: keyof TQueryConfig }).dataType]
			: queryConfig
	) as RouteQuery;

	const variables = (
		config && typeof config === "object" && "variables" in config
			? config.variables
			: {}
	) as Record<string, unknown>;

	return requestAniList({ query, variables }) as Promise<
		ResultOf<QueryType<TQueryConfig, TConfig>>
	>;
}

// --------------------------------------------------------

export { resolveAndRequest };

// --------------------------------------------------------
