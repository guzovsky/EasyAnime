// --------------------------------------------------------

import {
	CharacterDetailQueryDocument,
	type CharacterDetailQueryQueryVariables,
} from "@/gql/graphql";
import { requestAniList } from "../client";

// --------------------------------------------------------

async function fetchCharacterDetailById({
	characterId,
	mediaSort = "POPULARITY_DESC",
	voiceActorsLanguage = "JAPANESE",
	voiceActorsSort = "RELEVANCE",
}: CharacterDetailQueryQueryVariables) {
	const { Character } = await requestAniList({
		query: CharacterDetailQueryDocument,
		variables: {
			characterId,
			mediaSort,
			voiceActorsLanguage,
			voiceActorsSort,
		},
	});

	return Character;
}

// --------------------------------------------------------

export { fetchCharacterDetailById };

// --------------------------------------------------------
