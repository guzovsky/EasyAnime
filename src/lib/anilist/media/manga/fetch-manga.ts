// --------------------------------------------------------

import { buildFetcher } from "../../build-fetcher";
import { MANGA_QUERY_MAP } from "./manga-queries";

// --------------------------------------------------------

const fetchManga = buildFetcher(MANGA_QUERY_MAP);

// --------------------------------------------------------

export { fetchManga };

// --------------------------------------------------------
