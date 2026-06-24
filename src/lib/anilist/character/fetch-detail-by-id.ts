// --------------------------------------------------------

import {
	CharacterDetailDocument,
	type CharacterDetailQueryVariables,
} from "@/gql/graphql";
import { requestAniList } from "../client";

// --------------------------------------------------------

async function fetchCharacterDetailById({
	characterId,
	mediaSort = "POPULARITY_DESC",
	voiceActorsLanguage = "JAPANESE",
	voiceActorsSort = "RELEVANCE",
}: CharacterDetailQueryVariables) {
	const { Character } = await requestAniList({
		query: CharacterDetailDocument,
		variables: {
			characterId,
			mediaSort,
			voiceActorsLanguage,
			voiceActorsSort,
		} satisfies Required<CharacterDetailQueryVariables>,
	});

	return Character;
}

// --------------------------------------------------------

export { fetchCharacterDetailById };

// --------------------------------------------------------
