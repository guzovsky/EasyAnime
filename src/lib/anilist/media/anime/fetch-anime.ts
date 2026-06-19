// --------------------------------------------------------

import { buildFetcher } from "../../build-fetcher";
import { ANIME_QUERY_MAP } from "./anime-queries";

// --------------------------------------------------------

const fetchAnime = buildFetcher(ANIME_QUERY_MAP);

// --------------------------------------------------------

export { fetchAnime };

// --------------------------------------------------------
