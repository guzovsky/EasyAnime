// --------------------------------------------------------

import type { CodegenConfig } from "@graphql-codegen/cli";
import { ANILIST_GRAPHQL_URL } from "./src/lib/anilist/constants";

// --------------------------------------------------------

const config: CodegenConfig = {
	schema: ANILIST_GRAPHQL_URL,
	documents: ["src/**/*.tsx", "src/**/*.ts", "src/**/*.graphql"],
	ignoreNoDocuments: true,
	generates: {
		"./src/gql/": {
			preset: "client",
			presetConfig: {
				fragmentMasking: false,
			},
			config: {
				documentMode: "string",
				useTypeImports: true,
			},
		},
	},
};

// --------------------------------------------------------

export default config;

// --------------------------------------------------------
