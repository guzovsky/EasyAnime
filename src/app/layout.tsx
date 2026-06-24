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
		<html className="antialiased" lang="en">
			<body className="flex h-svh flex-col">
				<main className="flex flex-1 flex-col">{children}</main>
			</body>
		</html>
	);
}

// --------------------------------------------------------
