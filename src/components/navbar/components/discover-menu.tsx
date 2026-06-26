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
import { MenuLink } from "./menu-link";

// --------------------------------------------------------

type InsertSpaces<S extends string> = S extends `${infer Char}${infer Rest}`
	? Char extends Capitalize<Char>
		? ` ${Char}${InsertSpaces<Rest>}`
		: `${Char}${InsertSpaces<Rest>}`
	: S;

type FormatLabel<S extends string> = Capitalize<InsertSpaces<S>>;

// ---------------------

const LINKS = {
	all: { href: DISCOVER.all, label: "Discover All" },
	anime: {
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
				label: FormatLabel<K>;
				Icon: LucideIcon;
				route: Discover[K]["all"];
				subRoutes: {
					[SK in keyof Omit<Discover[K], "all">]: SK extends string
						? {
								label: FormatLabel<SK>;
								href: Discover[K][SK];
							}
						: never;
				};
			}
		: {
				label: "Discover All";
				href: Discover[K];
			};
};

// ---------------------

function DiscoverMenu() {
	return (
		<MenuTrigger>
			<Button className="group flex items-center gap-0.5 rounded-md outline-none hover:text-border-focus focus-visible:text-border-focus aria-expanded:text-border-focus">
				Discover
				<ChevronDown className="size-4.5 transition-transform group-aria-expanded:rotate-180" />
			</Button>
			<Popover
				className="w-60 overflow-y-auto rounded-lg border border-page/40 bg-page/60 px-2 py-2 shadow-lg backdrop-blur"
				crossOffset={-15}
				offset={14}
				placement="top start"
			>
				<Menu className="flex flex-col gap-2 outline-none">
					{Object.values(LINKS).map((v) => {
						if ("href" in v) {
							return (
								<MenuLink
									className="rounded-md pl-1 font-semibold"
									href={v.href}
									key={v.label}
								>
									{v.label}
								</MenuLink>
							);
						}
						const { Icon, label, route, subRoutes } = v;
						return (
							<MenuSection
								aria-label={label}
								className="flex flex-col gap-0.5"
								key={label}
							>
								<MenuLink
									className="flex items-center gap-1 rounded-md pl-2 font-medium"
									href={route}
								>
									<Icon className="size-3 stroke-3" />
									{label}
								</MenuLink>
								{Object.values(subRoutes).map(
									(v: { href: string; label: string }) => (
										<MenuLink
											className="rounded-md pl-3 text-sm tracking-tight"
											href={v.href}
											key={v.href}
										>
											{v.label}
										</MenuLink>
									)
								)}
							</MenuSection>
						);
					})}
				</Menu>
			</Popover>
		</MenuTrigger>
	);
}

// --------------------------------------------------------

export { DiscoverMenu };

// --------------------------------------------------------
