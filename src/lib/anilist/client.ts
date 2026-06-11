// --------------------------------------------------------

import type { TypedDocumentString } from "@/gql/graphql";
import { ANILIST_ERRORS, ANILIST_GRAPHQL_URL } from "./constants";
import type { AniListGraphQLError } from "./types/errors";
import type { AniListGraphQLResponse } from "./types/response";

// -------------------------------------------------- Error

interface AniListRequestErrorOptions {
	cause?: unknown;
	errors?: AniListGraphQLError[];
	statusCode?: number;
}

class AniListRequestError extends Error {
	readonly errors?: AniListGraphQLError[];
	readonly statusCode?: number;

	constructor(message: string, options?: AniListRequestErrorOptions) {
		super(message, { cause: options?.cause });
		this.name = "AniListRequestError";
		this.errors = options?.errors;
		this.statusCode = options?.statusCode;
	}
}

// ---------------------

function isAniListGraphQLErrorObject(
	entry: unknown
): entry is AniListGraphQLError {
	const isObject = typeof entry === "object" && entry !== null;
	return isObject && "message" in entry && typeof entry.message === "string";
}

function isAniListGraphQLErrorArray(
	value: unknown
): value is AniListGraphQLError[] {
	return Array.isArray(value) && value.every(isAniListGraphQLErrorObject);
}

// ---------------------

interface BuildErrorOptions {
	cause?: unknown;
	errors?: unknown;
	fallbackMessage: string;
	statusCode?: number;
}

// ---------------------

function buildError({
	fallbackMessage,
	errors,
	statusCode,
	cause,
}: BuildErrorOptions): AniListRequestError {
	if (!isAniListGraphQLErrorArray(errors)) {
		return new AniListRequestError(fallbackMessage, {
			statusCode,
			cause,
		});
	}

	return new AniListRequestError(errors[0]?.message ?? fallbackMessage, {
		errors,
		statusCode,
		cause,
	});
}

// -------------------------------------------------- Fetch

async function fetchAniList(fetchOptions: RequestInit) {
	let response: Response;

	try {
		response = await fetch(ANILIST_GRAPHQL_URL, fetchOptions);
	} catch (error) {
		throw buildError({
			fallbackMessage: ANILIST_ERRORS.NETWORK_FAILURE,
			cause: error,
		});
	}

	return response;
}

// --------------------------

async function parseAniListResponse<TData>(response: Response) {
	let body: AniListGraphQLResponse<TData> | undefined;

	try {
		body = await response.json();
	} catch (error) {
		throw buildError({
			fallbackMessage: ANILIST_ERRORS.INVALID_JSON,
			statusCode: response.status,
			cause: error,
		});
	}

	if (!response.ok) {
		throw buildError({
			fallbackMessage: ANILIST_ERRORS.NON_2XX_STATUS(response.status),
			statusCode: response.status,
			errors: body?.errors,
		});
	}

	if (body?.errors) {
		// GraphQL can return errors with a 200 status
		throw buildError({
			fallbackMessage: ANILIST_ERRORS.GRAPHQL_FAILURE,
			errors: body.errors,
			statusCode: response.status,
		});
	}

	if (body?.data == null) {
		throw buildError({
			fallbackMessage: ANILIST_ERRORS.NO_DATA,
		});
	}

	return body.data;
}

// ------------------------------------------------- Client

type RequestAniListOptions<TResult, TVariables> = {
	query: TypedDocumentString<TResult, TVariables>;
} & (TVariables extends Record<string, never>
	? { variables?: never }
	: { variables: TVariables });

// ---------------------

async function requestAniList<TResult, TVariables>({
	query,
	variables,
}: RequestAniListOptions<TResult, TVariables>) {
	const fetchOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify({ query: query.toString(), variables }),
	} satisfies RequestInit;

	const response = await fetchAniList(fetchOptions);
	const parsedResponse = await parseAniListResponse<TResult>(response);
	return parsedResponse;
}

// ------------------------------------------------ Exports

export type { AniListRequestErrorOptions, RequestAniListOptions };
export { AniListRequestError, requestAniList };

// --------------------------------------------------------
