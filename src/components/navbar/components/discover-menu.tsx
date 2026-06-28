"use client";

// --------------------------------------------------------

import {
	BookOpen,
	Brush,
	ChevronDown,
	type LucideIcon,
	Play,
	UserRound,
	VenetianMask,
} from "lucide-react";
import {
	Button,
	Menu,
	MenuSection,
	MenuTrigger,
	Popover,
} from "react-aria-components";
import { DISCOVER, type Discover } from "@/config/routes";
import { useScrollable } from "@/hooks/use-scrollable";
import { cn } from "@/utils/cn";
import { MenuLink } from "./menu-link";

// --------------------------------------------------------

type InsertSpaces<S extends string> = S extends `${infer Char}${infer Rest}`
	? Char extends Capitalize<Char>
		? ` ${Char}${InsertSpaces<Rest>}`
		: `${Char}${InsertSpaces<Rest>}`
	: S;

type FormatLabel<S extends string> = Capitalize<InsertSpaces<S>>;

// ---------------------

interface SubRoute<THref extends string, TLabel extends string> {
	href: THref;
	label: TLabel;
}

// ---------------------

const MENU_CONFIG = {
	all: { type: "link", href: DISCOVER.all, label: "Discover All" },
	anime: {
		type: "section",
		Icon: Play,
		label: "Anime",
		route: DISCOVER.anime.all,
		subRoutes: {
			popular: {
				href: DISCOVER.anime.popular,
				label: "Popular",
			},
			popularThisSeason: {
				href: DISCOVER.anime.popularThisSeason,
				label: "Popular This Season",
			},
			trending: {
				href: DISCOVER.anime.trending,
				label: "Trending",
			},
			upcoming: {
				href: DISCOVER.anime.upcoming,
				label: "Upcoming",
			},
		},
	},
	manga: {
		type: "section",
		Icon: BookOpen,
		label: "Manga",
		route: DISCOVER.manga.all,
		subRoutes: {
			popular: {
				href: DISCOVER.manga.popular,
				label: "Popular",
			},
			popularManhwa: {
				href: DISCOVER.manga.popularManhwa,
				label: "Popular Manhwa",
			},
			trending: {
				href: DISCOVER.manga.trending,
				label: "Trending",
			},
		},
	},
	character: {
		type: "section",
		Icon: VenetianMask,
		label: "Character",
		route: DISCOVER.character.all,
		subRoutes: {
			birthday: {
				href: DISCOVER.character.birthday,
				label: "Birthday",
			},
			mostFavorited: {
				href: DISCOVER.character.mostFavorited,
				label: "Most Favorited",
			},
		},
	},
	staff: {
		type: "section",
		Icon: UserRound,
		label: "Staff",
		route: DISCOVER.staff.all,
		subRoutes: {
			birthday: {
				href: DISCOVER.staff.birthday,
				label: "Birthday",
			},
			mostFavorited: {
				href: DISCOVER.staff.mostFavorited,
				label: "Most Favorited",
			},
		},
	},
	studio: {
		type: "section",
		Icon: Brush,
		label: "Studio",
		route: DISCOVER.studio.all,
		subRoutes: {
			mostFavorited: {
				href: DISCOVER.studio.mostFavorited,
				label: "Most Favorited",
			},
		},
	},
} as const satisfies {
	[K in keyof Discover]: Discover[K] extends Record<string, unknown>
		? {
				type: "section";
				label: FormatLabel<K>;
				Icon: LucideIcon;
				route: Discover[K]["all"];
				subRoutes: {
					[SK in keyof Omit<Discover[K], "all">]: SK extends string
						? Discover[K][SK] extends string
							? SubRoute<Discover[K][SK], FormatLabel<SK>>
							: never
						: never;
				};
			}
		: {
				type: "link";
				label: "Discover All";
				href: Discover[K];
			};
};

// ---------------------

const MENU_ORDER = [
	"all",
	"anime",
	"manga",
	"character",
	"staff",
	"studio",
] as const satisfies (keyof typeof DISCOVER)[];

// ---------------------

const MENU_ITEMS = MENU_ORDER.map((key) => {
	const item = MENU_CONFIG[key];

	if (item.type === "link") {
		return item;
	}

	return {
		...item,
		subRoutes: Object.values(item.subRoutes) as SubRoute<string, string>[],
	};
});

// ---------------------

function DiscoverMenu() {
	const { isScrollableVertical, canScrollDown, canScrollUp, ref } =
		useScrollable();

	return (
		<MenuTrigger>
			<Button className="group flex items-center gap-0.5 rounded-md outline-none hover:text-border-focus focus-visible:text-border-focus aria-expanded:text-border-focus">
				Discover
				<ChevronDown className="size-4.5 transition-transform group-aria-expanded:rotate-180" />
			</Button>
			<Popover
				className={cn(
					"relative flex w-50 flex-col overflow-hidden rounded-lg border border-page/40 bg-page/70 backdrop-blur"
				)}
				crossOffset={-15}
				offset={14}
				placement="top start"
			>
				<div
					className="scrollbar-hide max-h-[40svh] min-h-0 flex-1 overflow-y-auto px-2 py-2"
					ref={ref}
				>
					<Menu className="flex flex-col gap-2 outline-none">
						{MENU_ITEMS.map((item) => {
							if (item.type === "link") {
								return (
									<MenuLink
										className="rounded-md pl-1 font-semibold"
										href={item.href}
										key={item.href}
									>
										{item.label}
									</MenuLink>
								);
							}
							const { Icon, label, route, subRoutes } = item;
							return (
								<MenuSection
									aria-label={label}
									className="flex flex-col gap-0.5"
									key={route}
								>
									<MenuLink
										className="flex items-center gap-1 rounded-md pl-2 font-medium"
										href={route}
									>
										<Icon className="size-3 stroke-3" />
										{label}
									</MenuLink>
									{subRoutes.map((subRoute) => (
										<MenuLink
											className="rounded-md pl-6 text-sm tracking-tight"
											href={subRoute.href}
											key={subRoute.href}
										>
											{subRoute.label}
										</MenuLink>
									))}
								</MenuSection>
							);
						})}
					</Menu>
				</div>
				<div
					aria-hidden
					className={cn(
						"pointer-events-none absolute inset-x-0 top-0 z-10 h-8 bg-linear-to-b from-page/70 to-transparent transition-opacity duration-200",
						isScrollableVertical && canScrollUp
							? "opacity-100"
							: "opacity-0"
					)}
				/>
				<div
					aria-hidden
					className={cn(
						"pointer-events-none absolute inset-x-0 bottom-0 z-10 h-8 bg-linear-to-t from-page/70 to-transparent transition-opacity duration-200",
						isScrollableVertical && canScrollDown
							? "opacity-100"
							: "opacity-0"
					)}
				/>
			</Popover>
		</MenuTrigger>
	);
}

// --------------------------------------------------------

export { DiscoverMenu };

// --------------------------------------------------------
