// --------------------------------------------------------

import { buildFetcher } from "../../build-fetcher";
import { MANGA_ROUTE_QUERY_MAP } from "./route-queries";

// --------------------------------------------------------

const fetchManga = buildFetcher(MANGA_ROUTE_QUERY_MAP);

// --------------------------------------------------------

export { fetchManga };

// --------------------------------------------------------
