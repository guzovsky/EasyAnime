// ----------------------------------------- Discover Route

const DISCOVER_PATH = "/discover";

const ANIME_PATH = `${DISCOVER_PATH}/anime`;
const MANGA_PATH = `${DISCOVER_PATH}/manga`;
const CHARACTER_PATH = `${DISCOVER_PATH}/character`;
const STAFF_PATH = `${DISCOVER_PATH}/staff`;
const STUDIO_PATH = `${DISCOVER_PATH}/studio`;

// ---------------------

const DISCOVER = {
	all: DISCOVER_PATH,
	anime: {
		all: ANIME_PATH,
		trending: `${ANIME_PATH}/trending`,
		popular: `${ANIME_PATH}/popular`,
		popularThisSeason: `${ANIME_PATH}/popular-this-season`,
		upcoming: `${ANIME_PATH}/upcoming`,
	},
	manga: {
		all: MANGA_PATH,
		trending: `${MANGA_PATH}/trending`,
		popular: `${MANGA_PATH}/popular`,
		popularManhwa: `${MANGA_PATH}/popular-manhwa`,
	},
	character: {
		all: CHARACTER_PATH,
		birthday: `${CHARACTER_PATH}/birthday`,
		mostFavorited: `${CHARACTER_PATH}/most-favorited`,
	},
	staff: {
		all: STAFF_PATH,
		birthday: `${STAFF_PATH}/birthday`,
		mostFavorited: `${STAFF_PATH}/most-favorited`,
	},
	studio: {
		all: STUDIO_PATH,
		mostFavorited: `${STUDIO_PATH}/most-favorited`,
	},
} as const;

// ---------------------

type AnimeRouteKey = keyof typeof DISCOVER.anime;
type MangaRouteKey = keyof typeof DISCOVER.manga;
type CharacterRouteKey = keyof typeof DISCOVER.character;
type StaffRouteKey = keyof typeof DISCOVER.staff;
type StudioRouteKey = keyof typeof DISCOVER.studio;

// ------------------------------------------------- Routes

const ROUTES = { DISCOVER } as const;

// ------------------------------------------------ Exports

export type {
	AnimeRouteKey,
	CharacterRouteKey,
	MangaRouteKey,
	StaffRouteKey,
	StudioRouteKey,
};

export default ROUTES;

// --------------------------------------------------------
