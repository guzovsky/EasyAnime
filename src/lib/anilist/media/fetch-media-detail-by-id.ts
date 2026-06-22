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
		} satisfies Required<MediaDetailQueryQueryVariables>,
	});

	return Media;
}

// --------------------------------------------------------

export { fetchMediaDetailById };

// --------------------------------------------------------
