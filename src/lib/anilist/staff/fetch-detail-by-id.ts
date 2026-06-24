// --------------------------------------------------------

import {
	StaffDetailDocument,
	type StaffDetailQueryVariables,
} from "@/gql/graphql";
import { requestAniList } from "../client";

// --------------------------------------------------------

async function fetchStaffDetailById({
	staffId,
	characterMediaSort = "POPULARITY_DESC",
}: StaffDetailQueryVariables) {
	const { Staff } = await requestAniList({
		query: StaffDetailDocument,
		variables: {
			staffId,
			characterMediaSort,
		} satisfies Required<StaffDetailQueryVariables>,
	});

	return Staff;
}

// --------------------------------------------------------

export { fetchStaffDetailById };

// --------------------------------------------------------
