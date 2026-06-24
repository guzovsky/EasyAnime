// --------------------------------------------------------

import type { Metadata } from "next";
import "./globals.css";
import type { ReactNode } from "react";

// --------------------------------------------------------

export const metadata: Metadata = {
	title: "EasyAnime",
	description: "An app for discovering anime, manga, and more.",
};

// --------------------------------------------------------

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html className="h-full antialiased" lang="en">
			<body className="flex min-h-full flex-col">{children}</body>
		</html>
	);
}

// --------------------------------------------------------
