// --------------------------------------------------------

import type { StudioRouteKey } from "@/config/routes";
import { MostFavoritedStudiosDocument, StudioAllDocument } from "@/gql/graphql";
import type { QueryMap } from "../queries/types";

// --------------------------------------------------------

const STUDIO_QUERY_MAP = {
	all: StudioAllDocument,
	mostFavorited: MostFavoritedStudiosDocument,
} as const satisfies QueryMap<StudioRouteKey>;

// --------------------------------------------------------

export { STUDIO_QUERY_MAP };

// --------------------------------------------------------
