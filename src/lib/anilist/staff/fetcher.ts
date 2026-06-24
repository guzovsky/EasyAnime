// --------------------------------------------------------

import { buildFetcher } from "../build-fetcher";
import { STAFF_ROUTE_QUERY_MAP } from "./route-queries";

// --------------------------------------------------------

const fetchStaff = buildFetcher(STAFF_ROUTE_QUERY_MAP);

// --------------------------------------------------------

export { fetchStaff };

// --------------------------------------------------------
