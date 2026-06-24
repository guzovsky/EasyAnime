// --------------------------------------------------------

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// --------------------------------------------------------

/**
 * Combines conditional class names and merges Tailwind utility conflicts.
 *
 * @example
 * cn("px-2", isActive && "bg-blue-500", "px-4") // => "bg-blue-500 px-4"
 */
export function cn(...inputs: ClassValue[]): string {
	return twMerge(clsx(inputs));
}

// --------------------------------------------------------
