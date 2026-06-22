// --------------------------------------------------------

import { buildFetcher } from "../../build-fetcher";
import { ANIME_ROUTE_QUERY_MAP } from "./route-queries";

// --------------------------------------------------------

const fetchAnime = buildFetcher(ANIME_ROUTE_QUERY_MAP);

// --------------------------------------------------------

export { fetchAnime };

// --------------------------------------------------------
