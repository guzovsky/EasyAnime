"use client";

// ----------------------------------------------

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";

// ----------------------------------------------

interface Provider {
	children: ReactNode;
}

// ----------------------------------------------

function ThemeProvider({ children }: Provider) {
	return (
		<NextThemesProvider attribute="class" enableColorScheme enableSystem>
			{children}
		</NextThemesProvider>
	);
}

// ----------------------------------------------

export default function Providers({ children }: Provider) {
	return <ThemeProvider>{children}</ThemeProvider>;
}

// ----------------------------------------------
