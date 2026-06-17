// --------------------------------------------------------

import {
	MediaDetailQueryDocument,
	type MediaDetailQueryQueryVariables,
} from "@/gql/graphql";
import { requestAniList } from "../client";

// --------------------------------------------------------

async function fetchMediaDetailById({
	mediaId,
	recommendationSort = "RATING_DESC",
	staffSort = "RELEVANCE",
	voiceActorLanguage = "JAPANESE",
}: MediaDetailQueryQueryVariables) {
	const { Media } = await requestAniList({
		query: MediaDetailQueryDocument,
		variables: {
			mediaId,
			recommendationSort,
			staffSort,
			voiceActorLanguage,
		},
	});

	return Media;
}

// --------------------------------------------------------

export { fetchMediaDetailById };

// --------------------------------------------------------
