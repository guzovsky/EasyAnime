// -------------------------------------------------------------

import DOMPurify from "isomorphic-dompurify";

// -------------------------------------------------------------

function sanitizeAniListDescription(html?: string | null) {
	if (!html) {
		return null;
	}

	return DOMPurify.sanitize(html, {
		ALLOWED_TAGS: [
			"br",
			"i",
			"b",
			"em",
			"strong",
			"p",
			"span",
			"ul",
			"ol",
			"li",
		],
		ALLOWED_ATTR: [],
		FORCE_BODY: true,
	});
}

// -------------------------------------------------------------

export { sanitizeAniListDescription };

// -------------------------------------------------------------
