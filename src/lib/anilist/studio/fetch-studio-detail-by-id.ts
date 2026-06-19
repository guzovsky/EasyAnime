// --------------------------------------------------------

import {
	StudioDetailQueryDocument,
	type StudioDetailQueryQueryVariables,
} from "@/gql/graphql";
import { requestAniList } from "../client";
import { PAGE_DEFAULTS } from "../constants";

// --------------------------------------------------------

async function fetchStudioDetailById({
	studioId,
	bannerMediaIsMain = true,
	bannerMediaPage = PAGE_DEFAULTS.PAGE,
	bannerMediaPerPage = PAGE_DEFAULTS.BANNER_PER_PAGE,
	bannerMediaSort = "POPULARITY_DESC",
	mediaPage = PAGE_DEFAULTS.PAGE,
	mediaPerPage = PAGE_DEFAULTS.PER_PAGE,
	mediaSort = "POPULARITY_DESC",
}: StudioDetailQueryQueryVariables) {
	const { Studio } = await requestAniList({
		query: StudioDetailQueryDocument,
		variables: {
			studioId,
			bannerMediaIsMain,
			bannerMediaPerPage,
			bannerMediaSort,
			mediaPage,
			mediaPerPage,
			mediaSort,
			bannerMediaPage,
		},
	});

	return Studio;
}

// --------------------------------------------------------

export { fetchStudioDetailById };

// --------------------------------------------------------
