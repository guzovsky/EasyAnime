// --------------------------------------------------------

import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import type { ReactNode } from "react";
import { BottomNavbar } from "@/components/navbar/bottom-navbar";
import Providers from "./providers";

// --------------------------------------------------------

export const metadata: Metadata = {
	title: "EasyAnime",
	description: "An app for discovering anime, manga, and more.",
};

// --------------------------------------------------------

const poppins = Poppins({
	weight: ["300", "400", "500", "600", "700"],
	subsets: ["latin"],
});

// --------------------------------------------------------

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html
			className={`${poppins.className} antialiased`}
			lang="en"
			suppressHydrationWarning
		>
			<body className="flex min-h-svh flex-col">
				<Providers>
					<main className="flex flex-1 flex-col">{children}</main>
				</Providers>
				<BottomNavbar />
			</body>
		</html>
	);
}

// --------------------------------------------------------
