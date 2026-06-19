// --------------------------------------------------------

import {
	StaffDetailQueryDocument,
	type StaffDetailQueryQueryVariables,
} from "@/gql/graphql";
import { requestAniList } from "../client";

// --------------------------------------------------------

async function fetchStaffDetailById({
	staffId,
	characterMediaSort = "POPULARITY_DESC",
}: StaffDetailQueryQueryVariables) {
	const { Staff } = await requestAniList({
		query: StaffDetailQueryDocument,
		variables: { staffId, characterMediaSort },
	});

	return Staff;
}

// --------------------------------------------------------

export { fetchStaffDetailById };

// --------------------------------------------------------
