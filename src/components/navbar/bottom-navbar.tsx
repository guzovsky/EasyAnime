// --------------------------------------------------------

import { HomeIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { DiscoverMenu } from "./components/discover-menu";

function BottomNavbar() {
	return (
		<nav
			aria-label="Main Navigation"
			className={cn(
				"pointer-events-none",
				"flex gap-2 self-center font-medium",
				"sticky bottom-4 mt-8 p-2",
				"*:pointer-events-auto *:rounded-lg *:border *:border-page/40 *:bg-page/70 *:px-3 *:py-1 *:backdrop-blur"
			)}
		>
			<Link
				aria-label="Homepage"
				className="outline-none hover:text-border-focus focus-visible:text-border-focus"
				href="/"
			>
				<HomeIcon />
			</Link>
			<div className="flex gap-4">
				<DiscoverMenu />
			</div>
		</nav>
	);
}

// --------------------------------------------------------

export { BottomNavbar };

// --------------------------------------------------------
