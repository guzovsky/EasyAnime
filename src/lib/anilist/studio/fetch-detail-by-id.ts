// --------------------------------------------------------

import {
	StudioDetailDocument,
	type StudioDetailQueryVariables,
} from "@/gql/graphql";
import { requestAniList } from "../client";
import { PAGE_DEFAULTS } from "../constants";

// --------------------------------------------------------

async function fetchStudioDetailById({
	studioId,
	bannerMediaIsMain = true,
	bannerMediaPage = 1,
	bannerMediaPerPage = 2,
	bannerMediaSort = "POPULARITY_DESC",
	mediaPage = PAGE_DEFAULTS.PAGE,
	mediaPerPage = PAGE_DEFAULTS.PER_PAGE,
	mediaSort = "POPULARITY_DESC",
}: StudioDetailQueryVariables) {
	const { Studio } = await requestAniList({
		query: StudioDetailDocument,
		variables: {
			studioId,
			bannerMediaIsMain,
			bannerMediaPerPage,
			bannerMediaSort,
			mediaPage,
			mediaPerPage,
			mediaSort,
			bannerMediaPage,
		} satisfies Required<StudioDetailQueryVariables>,
	});

	return Studio;
}

// --------------------------------------------------------

export { fetchStudioDetailById };

// --------------------------------------------------------
