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

function deepSanitizeDescriptions<T>(data: T): T {
	if (!data || typeof data !== "object") {
		return data;
	}

	if (Array.isArray(data)) {
		return data.map((item) => deepSanitizeDescriptions(item)) as T;
	}

	const sanitizedObj: Record<string, unknown> = {};
	for (const [key, val] of Object.entries(data)) {
		if (key === "description" && typeof val === "string") {
			sanitizedObj[key] = sanitizeAniListDescription(val);
		} else {
			sanitizedObj[key] = deepSanitizeDescriptions(val);
		}
	}

	return sanitizedObj as T;
}

// -------------------------------------------------------------

export { deepSanitizeDescriptions, sanitizeAniListDescription };

// -------------------------------------------------------------
