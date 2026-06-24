// --------------------------------------------------------

import type { ComponentProps } from "react";
import { sanitizeAniListDescription } from "@/lib/anilist/utils/sanitize-anilist-description";

// --------------------------------------------------------

interface SanitizedDescriptionProps extends ComponentProps<"div"> {
	html?: string | null;
}

// ---------------------

export function SanitizedDescriptionDiv({
	html,
	...props
}: SanitizedDescriptionProps) {
	if (!html) {
		return null;
	}

	const cleanHtml = sanitizeAniListDescription(html);

	if (!cleanHtml) {
		return null;
	}

	return (
		<div
			{...props}
			// biome-ignore lint/security/noDangerouslySetInnerHtml: sanitized by DOMPurify
			dangerouslySetInnerHTML={{ __html: cleanHtml }}
		/>
	);
}

// --------------------------------------------------------
