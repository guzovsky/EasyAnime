// --------------------------------------------------------

import type { ResultOf } from "@graphql-typed-document-node/core";
import { requestAniList } from "../client";
import type { QueryType, RouteQuery } from "../queries/types";
import { deepSanitizeDescriptions } from "./sanitize-anilist-description";

// --------------------------------------------------------

async function resolveRequestAndSanitize<TQueryConfig, TConfig>(
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

	const data = (await requestAniList({ query, variables })) as ResultOf<
		QueryType<TQueryConfig, TConfig>
	>;

	return deepSanitizeDescriptions(data);
}

// --------------------------------------------------------

export { resolveRequestAndSanitize };

// --------------------------------------------------------
