// ------------------------------------------------------- Error

export interface AniListErrorLocation {
	column: number;
	line: number;
}

export interface AniListGraphQLError {
	locations?: AniListErrorLocation[] | null;
	message: string;
	status?: number | null;
}

// ---------------------------------------------------- Response

export type AniListGraphQLResponse<TData> = {
	data?: TData | null;
	errors?: AniListGraphQLError[] | null;
} | null;

// -------------------------------------------------------------
