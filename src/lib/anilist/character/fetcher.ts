// --------------------------------------------------------

import { buildFetcher } from "../build-fetcher";
import { CHARACTER_ROUTE_QUERY_MAP } from "./route-queries";

// --------------------------------------------------------

const fetchCharacter = buildFetcher(CHARACTER_ROUTE_QUERY_MAP);

// --------------------------------------------------------

export { fetchCharacter };

// --------------------------------------------------------
