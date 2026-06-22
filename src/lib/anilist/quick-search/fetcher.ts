// --------------------------------------------------------

import {
	QuickSearchDocument,
	type QuickSearchQueryVariables,
} from "@/gql/graphql";
import { requestAniList } from "../client";
import { QUICK_SEARCH_DEFAULTS } from "../constants";

// --------------------------------------------------------

function fetchQuickSearch(v: QuickSearchQueryVariables) {
	const variables = {
		...QUICK_SEARCH_DEFAULTS,
		...v,
	} satisfies Required<QuickSearchQueryVariables>;

	return requestAniList({ query: QuickSearchDocument, variables });
}

// --------------------------------------------------------

export { fetchQuickSearch };

// --------------------------------------------------------
