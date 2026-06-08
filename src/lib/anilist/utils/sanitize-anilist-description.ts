// -------------------------------------------------------------

import DOMPurify from "isomorphic-dompurify";

// -------------------------------------------------------------

function sanitizeAniListDescription(html?: string | null) {
	if (!html) {
		return "No description available.";
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

function sanitizeAniListNode<T>(node: T): T {
	if (
		node &&
		typeof node === "object" &&
		"description" in node &&
		typeof node.description === "string"
	) {
		return {
			...node,
			description: sanitizeAniListDescription(node.description),
		};
	}
	return node;
}

// ---------------------

function sanitizeAniListNodes<T>(node: T): T {
	if (Array.isArray(node)) {
		return node.map((item) => sanitizeAniListNode(item)) as T;
	}
	return sanitizeAniListNode(node);
}

// -------------------------------------------------------------

export { sanitizeAniListNodes };

// -------------------------------------------------------------
