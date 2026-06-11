// -------------------------------------------------------------

export interface AniListErrorLocation {
	column: number;
	line: number;
}

export interface AniListGraphQLError {
	locations?: AniListErrorLocation[] | null;
	message: string;
	status?: number | null;
}

// -------------------------------------------------------------
