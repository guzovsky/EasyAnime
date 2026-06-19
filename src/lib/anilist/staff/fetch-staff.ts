// --------------------------------------------------------

import { buildFetcher } from "../build-fetcher";
import { STAFF_QUERY_MAP } from "./staff-queries";

// --------------------------------------------------------

const fetchStaff = buildFetcher(STAFF_QUERY_MAP);

// --------------------------------------------------------

export { fetchStaff };

// --------------------------------------------------------
