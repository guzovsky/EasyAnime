// --------------------------------------------------------

import { buildFetcher } from "../build-fetcher";
import { STUDIO_ROUTE_QUERY_MAP } from "./route-queries";

// --------------------------------------------------------

const fetchStudio = buildFetcher(STUDIO_ROUTE_QUERY_MAP);

// --------------------------------------------------------

export { fetchStudio };

// --------------------------------------------------------
