// --------------------------------------------------------

import {
	MediaDetailDocument,
	type MediaDetailQueryVariables,
} from "@/gql/graphql";
import { requestAniList } from "../client";

// --------------------------------------------------------

async function fetchMediaDetailById({
	mediaId,
	recommendationSort = "RATING_DESC",
	staffSort = "RELEVANCE",
	voiceActorLanguage = "JAPANESE",
}: MediaDetailQueryVariables) {
	const { Media } = await requestAniList({
		query: MediaDetailDocument,
		variables: {
			mediaId,
			recommendationSort,
			staffSort,
			voiceActorLanguage,
		} satisfies Required<MediaDetailQueryVariables>,
	});

	return Media;
}

// --------------------------------------------------------

export { fetchMediaDetailById };

// --------------------------------------------------------
