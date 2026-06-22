// --------------------------------------------------------

import type { StudioRouteKey } from "@/config/routes";
import { MostFavoritedStudiosDocument, StudioAllDocument } from "@/gql/graphql";
import type { QueryMap } from "../queries/types";

// --------------------------------------------------------

const STUDIO_QUERY_MAP = {
	all: StudioAllDocument,
	mostFavorited: MostFavoritedStudiosDocument,
} as const satisfies QueryMap<StudioRouteKey>;

type StudioQueryMap = typeof STUDIO_QUERY_MAP;

// --------------------------------------------------------

export type { StudioQueryMap };
export { STUDIO_QUERY_MAP };

// --------------------------------------------------------
