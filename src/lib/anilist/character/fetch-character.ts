// --------------------------------------------------------

import { buildFetcher } from "../build-fetcher";
import { CHARACTER_QUERY_MAP } from "./character-queries";

// --------------------------------------------------------

const fetchCharacter = buildFetcher(CHARACTER_QUERY_MAP);

// --------------------------------------------------------

export { fetchCharacter };

// --------------------------------------------------------
