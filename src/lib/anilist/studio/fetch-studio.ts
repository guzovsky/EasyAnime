// --------------------------------------------------------

import { buildFetcher } from "../build-fetcher";
import { STUDIO_QUERY_MAP } from "./studio-queries";

// --------------------------------------------------------

const fetchStudio = buildFetcher(STUDIO_QUERY_MAP);

// --------------------------------------------------------

export { fetchStudio };

// --------------------------------------------------------
