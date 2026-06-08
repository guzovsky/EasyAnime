// ----------------------------------------------

const ORDER = ["WINTER", "SPRING", "SUMMER", "FALL"] as const;

interface SeasonInfo {
	season: (typeof ORDER)[number];
	year: number;
}

// ----------------------------------------------

function getAniListCurrentSeason(now: Date = new Date()): SeasonInfo {
	const month = now.getMonth();
	const year = now.getFullYear();
	if (month <= 2) {
		return { season: "WINTER", year };
	}
	if (month <= 5) {
		return { season: "SPRING", year };
	}
	if (month <= 8) {
		return { season: "SUMMER", year };
	}
	return { season: "FALL", year };
}

// ---------------------

function getAniListNextSeason(
	current: SeasonInfo = getAniListCurrentSeason()
): SeasonInfo {
	const idx = ORDER.indexOf(current.season);
	// biome-ignore lint/style/noNonNullAssertion: (idx + 1) % order.length always produces a valid index (0..length-1)
	const nextSeason = ORDER[(idx + 1) % ORDER.length]!;
	const nextYear = nextSeason === "WINTER" ? current.year + 1 : current.year;
	return { season: nextSeason, year: nextYear };
}

// ---------------------

function getAniListPreviousSeason(
	current: SeasonInfo = getAniListCurrentSeason()
): SeasonInfo {
	const idx = ORDER.indexOf(current.season);
	// biome-ignore lint/style/noNonNullAssertion: modulo guarantees index is within 0..length-1
	const prevSeason = ORDER[(idx - 1 + ORDER.length) % ORDER.length]!;
	const prevYear = prevSeason === "FALL" ? current.year - 1 : current.year;
	return { season: prevSeason, year: prevYear };
}

// ----------------------------------------------

export {
	getAniListCurrentSeason,
	getAniListNextSeason,
	getAniListPreviousSeason,
};

// ----------------------------------------------
