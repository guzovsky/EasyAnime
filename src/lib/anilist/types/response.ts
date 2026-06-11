// -------------------------------------------------------------

import type { AniListGraphQLError } from "./errors";

// -------------------------------------------------------------

export type AniListGraphQLResponse<TData> = {
	data?: TData | null;
	errors?: AniListGraphQLError[] | null;
} | null;

// -------------------------------------------------------------
