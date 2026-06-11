/* eslint-disable */
/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type ExternalLinkType =
  | 'INFO'
  | 'SOCIAL'
  | 'STREAMING';

/** The format the media was released in */
export type MediaFormat =
  /** Professionally published manga with more than one chapter */
  | 'MANGA'
  /** Anime movies with a theatrical release */
  | 'MOVIE'
  /** Short anime released as a music video */
  | 'MUSIC'
  /** Written books released as a series of light novels */
  | 'NOVEL'
  /** (Original Net Animation) Anime that have been originally released online or are only available through streaming services. */
  | 'ONA'
  /** Manga with just one chapter */
  | 'ONE_SHOT'
  /** (Original Video Animation) Anime that have been released directly on DVD/Blu-ray without originally going through a theatrical release or television broadcast */
  | 'OVA'
  /** Special episodes that have been included in DVD/Blu-ray releases, picture dramas, pilots, etc */
  | 'SPECIAL'
  /** Anime broadcast on television */
  | 'TV'
  /** Anime which are under 15 minutes in length and broadcast on television */
  | 'TV_SHORT';

/** The type of ranking */
export type MediaRankType =
  /** Ranking is based on the media's popularity */
  | 'POPULAR'
  /** Ranking is based on the media's ratings/score */
  | 'RATED';

/** Type of relation media has to its parent. */
export type MediaRelation =
  /** An adaption of this media into a different format */
  | 'ADAPTATION'
  /** An alternative version of the same media */
  | 'ALTERNATIVE'
  /** Shares at least 1 character */
  | 'CHARACTER'
  /** Version 2 only. */
  | 'COMPILATION'
  /** Version 2 only. */
  | 'CONTAINS'
  /** Other */
  | 'OTHER'
  /** The media a side story is from */
  | 'PARENT'
  /** Released before the relation */
  | 'PREQUEL'
  /** Released after the relation */
  | 'SEQUEL'
  /** A side story of the parent media */
  | 'SIDE_STORY'
  /** Version 2 only. The source material the media was adapted from */
  | 'SOURCE'
  /** An alternative version of the media with a different primary focus */
  | 'SPIN_OFF'
  /** A shortened and summarized version */
  | 'SUMMARY';

export type MediaSeason =
  /** Predominantly started airing between October and November */
  | 'FALL'
  /** Predominantly started airing between April and June */
  | 'SPRING'
  /** Predominantly started airing between July and September */
  | 'SUMMER'
  /** Predominantly started airing between January and March */
  | 'WINTER';

/** Media sort enums */
export type MediaSort =
  | 'CHAPTERS'
  | 'CHAPTERS_DESC'
  | 'DURATION'
  | 'DURATION_DESC'
  | 'END_DATE'
  | 'END_DATE_DESC'
  | 'EPISODES'
  | 'EPISODES_DESC'
  | 'FAVOURITES'
  | 'FAVOURITES_DESC'
  | 'FORMAT'
  | 'FORMAT_DESC'
  | 'ID'
  | 'ID_DESC'
  | 'POPULARITY'
  | 'POPULARITY_DESC'
  | 'SCORE'
  | 'SCORE_DESC'
  | 'SEARCH_MATCH'
  | 'START_DATE'
  | 'START_DATE_DESC'
  | 'STATUS'
  | 'STATUS_DESC'
  | 'TITLE_ENGLISH'
  | 'TITLE_ENGLISH_DESC'
  | 'TITLE_NATIVE'
  | 'TITLE_NATIVE_DESC'
  | 'TITLE_ROMAJI'
  | 'TITLE_ROMAJI_DESC'
  | 'TRENDING'
  | 'TRENDING_DESC'
  | 'TYPE'
  | 'TYPE_DESC'
  | 'UPDATED_AT'
  | 'UPDATED_AT_DESC'
  | 'VOLUMES'
  | 'VOLUMES_DESC';

/** Source type the media was adapted from */
export type MediaSource =
  /** Version 2+ only. Japanese Anime */
  | 'ANIME'
  /** Version 3 only. Comics excluding manga */
  | 'COMIC'
  /** Version 2+ only. Self-published works */
  | 'DOUJINSHI'
  /** Version 3 only. Games excluding video games */
  | 'GAME'
  /** Written work published in volumes */
  | 'LIGHT_NOVEL'
  /** Version 3 only. Live action media such as movies or TV show */
  | 'LIVE_ACTION'
  /** Asian comic book */
  | 'MANGA'
  /** Version 3 only. Multimedia project */
  | 'MULTIMEDIA_PROJECT'
  /** Version 2+ only. Written works not published in volumes */
  | 'NOVEL'
  /** An original production not based of another work */
  | 'ORIGINAL'
  /** Other */
  | 'OTHER'
  /** Version 3 only. Picture book */
  | 'PICTURE_BOOK'
  /** Video game */
  | 'VIDEO_GAME'
  /** Video game driven primary by text and narrative */
  | 'VISUAL_NOVEL'
  /** Version 3 only. Written works published online */
  | 'WEB_NOVEL';

/** The current releasing status of the media */
export type MediaStatus =
  /** Ended before the work could be finished */
  | 'CANCELLED'
  /** Has completed and is no longer being released */
  | 'FINISHED'
  /** Version 2 only. Is currently paused from releasing and will resume at a later date */
  | 'HIATUS'
  /** To be released at a later date */
  | 'NOT_YET_RELEASED'
  /** Currently releasing */
  | 'RELEASING';

/** Media type enum, anime or manga. */
export type MediaType =
  /** Japanese Anime */
  | 'ANIME'
  /** Asian comic */
  | 'MANGA';

/** Recommendation sort enums */
export type RecommendationSort =
  | 'ID'
  | 'ID_DESC'
  | 'RATING'
  | 'RATING_DESC';

/** The primary language of the voice actor */
export type StaffLanguage =
  /** English */
  | 'ENGLISH'
  /** French */
  | 'FRENCH'
  /** German */
  | 'GERMAN'
  /** Hebrew */
  | 'HEBREW'
  /** Hungarian */
  | 'HUNGARIAN'
  /** Italian */
  | 'ITALIAN'
  /** Japanese */
  | 'JAPANESE'
  /** Korean */
  | 'KOREAN'
  /** Portuguese */
  | 'PORTUGUESE'
  /** Spanish */
  | 'SPANISH';

/** Staff sort enums */
export type StaffSort =
  | 'FAVOURITES'
  | 'FAVOURITES_DESC'
  | 'ID'
  | 'ID_DESC'
  | 'LANGUAGE'
  | 'LANGUAGE_DESC'
  /** Order manually decided by moderators */
  | 'RELEVANCE'
  | 'ROLE'
  | 'ROLE_DESC'
  | 'SEARCH_MATCH';

export type MostFavoritedCharactersQueryVariables = Exact<{
  page?: number | null | undefined;
  perPage?: number | null | undefined;
}>;


export type MostFavoritedCharactersQuery = { Page: { characters: Array<{ id: number, description: string | null, gender: string | null, age: string | null, name: { full: string | null, native: string | null } | null, image: { large: string | null, medium: string | null } | null } | null> | null, pageInfo: { total: number | null, perPage: number | null, currentPage: number | null, lastPage: number | null, hasNextPage: boolean | null } | null } | null };

export type BirthdayCharactersQueryVariables = Exact<{
  page?: number | null | undefined;
  perPage?: number | null | undefined;
}>;


export type BirthdayCharactersQuery = { Page: { characters: Array<{ id: number, description: string | null, gender: string | null, age: string | null, name: { full: string | null, native: string | null } | null, image: { large: string | null, medium: string | null } | null } | null> | null, pageInfo: { total: number | null, perPage: number | null, currentPage: number | null, lastPage: number | null, hasNextPage: boolean | null } | null } | null };

export type CharacterAllQueryVariables = Exact<{
  page?: number | null | undefined;
  perPage?: number | null | undefined;
}>;


export type CharacterAllQuery = { birthday: { characters: Array<{ id: number, description: string | null, gender: string | null, age: string | null, name: { full: string | null, native: string | null } | null, image: { large: string | null, medium: string | null } | null } | null> | null, pageInfo: { total: number | null, perPage: number | null, currentPage: number | null, lastPage: number | null, hasNextPage: boolean | null } | null } | null, mostFavorited: { characters: Array<{ id: number, description: string | null, gender: string | null, age: string | null, name: { full: string | null, native: string | null } | null, image: { large: string | null, medium: string | null } | null } | null> | null, pageInfo: { total: number | null, perPage: number | null, currentPage: number | null, lastPage: number | null, hasNextPage: boolean | null } | null } | null };

export type CharacterDetailQueryQueryVariables = Exact<{
  characterId?: number | null | undefined;
  mediaSort?: Array<MediaSort | null | undefined> | MediaSort | null | undefined;
  voiceActorsLanguage?: StaffLanguage | null | undefined;
  voiceActorsSort?: Array<StaffSort | null | undefined> | StaffSort | null | undefined;
}>;


export type CharacterDetailQueryQuery = { Character: { id: number, description: string | null, gender: string | null, age: string | null, favourites: number | null, bloodType: string | null, siteUrl: string | null, name: { full: string | null, native: string | null, alternative: Array<string | null> | null, alternativeSpoiler: Array<string | null> | null } | null, image: { large: string | null, medium: string | null } | null, dateOfBirth: { day: number | null, month: number | null, year: number | null } | null, media: { edges: Array<{ id: number | null, node: { id: number, type: MediaType | null, coverImage: { extraLarge: string | null, large: string | null, medium: string | null } | null, title: { english: string | null, native: string | null, romaji: string | null } | null } | null, voiceActors: Array<{ id: number, name: { full: string | null, native: string | null } | null, image: { large: string | null, medium: string | null } | null } | null> | null } | null> | null } | null } | null };

export type CharacterCardFragment = { id: number, description: string | null, gender: string | null, age: string | null, name: { full: string | null, native: string | null } | null, image: { large: string | null, medium: string | null } | null };

export type CharacterDetailFragment = { id: number, description: string | null, gender: string | null, age: string | null, favourites: number | null, bloodType: string | null, siteUrl: string | null, name: { full: string | null, native: string | null, alternative: Array<string | null> | null, alternativeSpoiler: Array<string | null> | null } | null, image: { large: string | null, medium: string | null } | null, dateOfBirth: { day: number | null, month: number | null, year: number | null } | null, media: { edges: Array<{ id: number | null, node: { id: number, type: MediaType | null, coverImage: { extraLarge: string | null, large: string | null, medium: string | null } | null, title: { english: string | null, native: string | null, romaji: string | null } | null } | null, voiceActors: Array<{ id: number, name: { full: string | null, native: string | null } | null, image: { large: string | null, medium: string | null } | null } | null> | null } | null> | null } | null };

export type TrendingAnimeQueryVariables = Exact<{
  page?: number | null | undefined;
  perPage?: number | null | undefined;
}>;


export type TrendingAnimeQuery = { Page: { media: Array<{ averageScore: number | null, description: string | null, status: MediaStatus | null, id: number, genres: Array<string | null> | null, format: MediaFormat | null, type: MediaType | null, title: { romaji: string | null, english: string | null, native: string | null } | null, coverImage: { extraLarge: string | null, large: string | null, medium: string | null } | null } | null> | null, pageInfo: { total: number | null, perPage: number | null, currentPage: number | null, lastPage: number | null, hasNextPage: boolean | null } | null } | null };

export type PopularAnimeQueryVariables = Exact<{
  page?: number | null | undefined;
  perPage?: number | null | undefined;
}>;


export type PopularAnimeQuery = { Page: { media: Array<{ averageScore: number | null, description: string | null, status: MediaStatus | null, id: number, genres: Array<string | null> | null, format: MediaFormat | null, type: MediaType | null, title: { romaji: string | null, english: string | null, native: string | null } | null, coverImage: { extraLarge: string | null, large: string | null, medium: string | null } | null } | null> | null, pageInfo: { total: number | null, perPage: number | null, currentPage: number | null, lastPage: number | null, hasNextPage: boolean | null } | null } | null };

export type PopularThisSeasonAnimeQueryVariables = Exact<{
  page?: number | null | undefined;
  perPage?: number | null | undefined;
  season?: MediaSeason | null | undefined;
  seasonYear?: number | null | undefined;
}>;


export type PopularThisSeasonAnimeQuery = { Page: { media: Array<{ averageScore: number | null, description: string | null, status: MediaStatus | null, id: number, genres: Array<string | null> | null, format: MediaFormat | null, type: MediaType | null, title: { romaji: string | null, english: string | null, native: string | null } | null, coverImage: { extraLarge: string | null, large: string | null, medium: string | null } | null } | null> | null, pageInfo: { total: number | null, perPage: number | null, currentPage: number | null, lastPage: number | null, hasNextPage: boolean | null } | null } | null };

export type UpcomingAnimeQueryVariables = Exact<{
  page?: number | null | undefined;
  perPage?: number | null | undefined;
  season?: MediaSeason | null | undefined;
  seasonYear?: number | null | undefined;
}>;


export type UpcomingAnimeQuery = { Page: { media: Array<{ averageScore: number | null, description: string | null, status: MediaStatus | null, id: number, genres: Array<string | null> | null, format: MediaFormat | null, type: MediaType | null, title: { romaji: string | null, english: string | null, native: string | null } | null, coverImage: { extraLarge: string | null, large: string | null, medium: string | null } | null } | null> | null, pageInfo: { total: number | null, perPage: number | null, currentPage: number | null, lastPage: number | null, hasNextPage: boolean | null } | null } | null };

export type TrendingAnimeBannerQueryVariables = Exact<{
  page?: number | null | undefined;
  perPage?: number | null | undefined;
}>;


export type TrendingAnimeBannerQuery = { Page: { media: Array<{ bannerImage: string | null, id: number, genres: Array<string | null> | null, type: MediaType | null, title: { romaji: string | null, english: string | null, native: string | null } | null } | null> | null, pageInfo: { total: number | null, perPage: number | null, currentPage: number | null, lastPage: number | null, hasNextPage: boolean | null } | null } | null };

export type AnimeAllQueryVariables = Exact<{
  page?: number | null | undefined;
  perPage?: number | null | undefined;
  popularThisSeasonSeason?: MediaSeason | null | undefined;
  popularThisSeasonSeasonYear?: number | null | undefined;
  upcomingSeason?: MediaSeason | null | undefined;
  upcomingSeasonYear?: number | null | undefined;
}>;


export type AnimeAllQuery = { trendingAnimeBanner: { media: Array<{ bannerImage: string | null, id: number, genres: Array<string | null> | null, type: MediaType | null, title: { romaji: string | null, english: string | null, native: string | null } | null } | null> | null, pageInfo: { total: number | null, perPage: number | null, currentPage: number | null, lastPage: number | null, hasNextPage: boolean | null } | null } | null, trending: { media: Array<{ averageScore: number | null, description: string | null, status: MediaStatus | null, id: number, genres: Array<string | null> | null, format: MediaFormat | null, type: MediaType | null, title: { romaji: string | null, english: string | null, native: string | null } | null, coverImage: { extraLarge: string | null, large: string | null, medium: string | null } | null } | null> | null, pageInfo: { total: number | null, perPage: number | null, currentPage: number | null, lastPage: number | null, hasNextPage: boolean | null } | null } | null, popular: { media: Array<{ averageScore: number | null, description: string | null, status: MediaStatus | null, id: number, genres: Array<string | null> | null, format: MediaFormat | null, type: MediaType | null, title: { romaji: string | null, english: string | null, native: string | null } | null, coverImage: { extraLarge: string | null, large: string | null, medium: string | null } | null } | null> | null, pageInfo: { total: number | null, perPage: number | null, currentPage: number | null, lastPage: number | null, hasNextPage: boolean | null } | null } | null, popularThisSeason: { media: Array<{ averageScore: number | null, description: string | null, status: MediaStatus | null, id: number, genres: Array<string | null> | null, format: MediaFormat | null, type: MediaType | null, title: { romaji: string | null, english: string | null, native: string | null } | null, coverImage: { extraLarge: string | null, large: string | null, medium: string | null } | null } | null> | null, pageInfo: { total: number | null, perPage: number | null, currentPage: number | null, lastPage: number | null, hasNextPage: boolean | null } | null } | null, upcoming: { media: Array<{ averageScore: number | null, description: string | null, status: MediaStatus | null, id: number, genres: Array<string | null> | null, format: MediaFormat | null, type: MediaType | null, title: { romaji: string | null, english: string | null, native: string | null } | null, coverImage: { extraLarge: string | null, large: string | null, medium: string | null } | null } | null> | null, pageInfo: { total: number | null, perPage: number | null, currentPage: number | null, lastPage: number | null, hasNextPage: boolean | null } | null } | null };

export type TrendingMangaQueryVariables = Exact<{
  page?: number | null | undefined;
  perPage?: number | null | undefined;
}>;


export type TrendingMangaQuery = { Page: { media: Array<{ averageScore: number | null, description: string | null, status: MediaStatus | null, id: number, genres: Array<string | null> | null, format: MediaFormat | null, type: MediaType | null, title: { romaji: string | null, english: string | null, native: string | null } | null, coverImage: { extraLarge: string | null, large: string | null, medium: string | null } | null } | null> | null, pageInfo: { total: number | null, perPage: number | null, currentPage: number | null, lastPage: number | null, hasNextPage: boolean | null } | null } | null };

export type PopularMangaQueryVariables = Exact<{
  page?: number | null | undefined;
  perPage?: number | null | undefined;
}>;


export type PopularMangaQuery = { Page: { media: Array<{ averageScore: number | null, description: string | null, status: MediaStatus | null, id: number, genres: Array<string | null> | null, format: MediaFormat | null, type: MediaType | null, title: { romaji: string | null, english: string | null, native: string | null } | null, coverImage: { extraLarge: string | null, large: string | null, medium: string | null } | null } | null> | null, pageInfo: { total: number | null, perPage: number | null, currentPage: number | null, lastPage: number | null, hasNextPage: boolean | null } | null } | null };

export type PopularManhwaQueryVariables = Exact<{
  page?: number | null | undefined;
  perPage?: number | null | undefined;
}>;


export type PopularManhwaQuery = { Page: { media: Array<{ averageScore: number | null, description: string | null, status: MediaStatus | null, id: number, genres: Array<string | null> | null, format: MediaFormat | null, type: MediaType | null, title: { romaji: string | null, english: string | null, native: string | null } | null, coverImage: { extraLarge: string | null, large: string | null, medium: string | null } | null } | null> | null, pageInfo: { total: number | null, perPage: number | null, currentPage: number | null, lastPage: number | null, hasNextPage: boolean | null } | null } | null };

export type TrendingMangaBannerQueryVariables = Exact<{
  page?: number | null | undefined;
  perPage?: number | null | undefined;
}>;


export type TrendingMangaBannerQuery = { Page: { media: Array<{ bannerImage: string | null, id: number, genres: Array<string | null> | null, type: MediaType | null, title: { romaji: string | null, english: string | null, native: string | null } | null } | null> | null, pageInfo: { total: number | null, perPage: number | null, currentPage: number | null, lastPage: number | null, hasNextPage: boolean | null } | null } | null };

export type MangaAllQueryVariables = Exact<{
  page?: number | null | undefined;
  perPage?: number | null | undefined;
}>;


export type MangaAllQuery = { trendingMangaBanner: { media: Array<{ bannerImage: string | null, id: number, genres: Array<string | null> | null, type: MediaType | null, title: { romaji: string | null, english: string | null, native: string | null } | null } | null> | null, pageInfo: { total: number | null, perPage: number | null, currentPage: number | null, lastPage: number | null, hasNextPage: boolean | null } | null } | null, trending: { media: Array<{ averageScore: number | null, description: string | null, status: MediaStatus | null, id: number, genres: Array<string | null> | null, format: MediaFormat | null, type: MediaType | null, title: { romaji: string | null, english: string | null, native: string | null } | null, coverImage: { extraLarge: string | null, large: string | null, medium: string | null } | null } | null> | null, pageInfo: { total: number | null, perPage: number | null, currentPage: number | null, lastPage: number | null, hasNextPage: boolean | null } | null } | null, popular: { media: Array<{ averageScore: number | null, description: string | null, status: MediaStatus | null, id: number, genres: Array<string | null> | null, format: MediaFormat | null, type: MediaType | null, title: { romaji: string | null, english: string | null, native: string | null } | null, coverImage: { extraLarge: string | null, large: string | null, medium: string | null } | null } | null> | null, pageInfo: { total: number | null, perPage: number | null, currentPage: number | null, lastPage: number | null, hasNextPage: boolean | null } | null } | null, popularManhwa: { media: Array<{ averageScore: number | null, description: string | null, status: MediaStatus | null, id: number, genres: Array<string | null> | null, format: MediaFormat | null, type: MediaType | null, title: { romaji: string | null, english: string | null, native: string | null } | null, coverImage: { extraLarge: string | null, large: string | null, medium: string | null } | null } | null> | null, pageInfo: { total: number | null, perPage: number | null, currentPage: number | null, lastPage: number | null, hasNextPage: boolean | null } | null } | null };

export type MediaCardFragment = { averageScore: number | null, description: string | null, status: MediaStatus | null, id: number, genres: Array<string | null> | null, format: MediaFormat | null, type: MediaType | null, title: { romaji: string | null, english: string | null, native: string | null } | null, coverImage: { extraLarge: string | null, large: string | null, medium: string | null } | null };

export type MediaBannerFragment = { bannerImage: string | null, id: number, genres: Array<string | null> | null, type: MediaType | null, title: { romaji: string | null, english: string | null, native: string | null } | null };

export type MediaDetailFragment = { id: number, type: MediaType | null, synonyms: Array<string | null> | null, chapters: number | null, volumes: number | null, episodes: number | null, duration: number | null, averageScore: number | null, countryOfOrigin: unknown, bannerImage: string | null, hashtag: string | null, description: string | null, format: MediaFormat | null, genres: Array<string | null> | null, updatedAt: number | null, seasonYear: number | null, season: MediaSeason | null, source: MediaSource | null, siteUrl: string | null, status: MediaStatus | null, title: { english: string | null, romaji: string | null, native: string | null } | null, coverImage: { extraLarge: string | null, large: string | null, medium: string | null } | null, externalLinks: Array<{ icon: string | null, id: number, type: ExternalLinkType | null, url: string | null, site: string, language: string | null, siteId: number | null } | null> | null, nextAiringEpisode: { airingAt: number, episode: number, id: number, timeUntilAiring: number } | null, rankings: Array<{ allTime: boolean | null, context: string, rank: number, type: MediaRankType, format: MediaFormat, id: number, season: MediaSeason | null, year: number | null } | null> | null, endDate: { year: number | null, month: number | null, day: number | null } | null, startDate: { year: number | null, month: number | null, day: number | null } | null, streamingEpisodes: Array<{ title: string | null, thumbnail: string | null, url: string | null, site: string | null } | null> | null, studios: { nodes: Array<{ id: number, name: string, siteUrl: string | null } | null> | null } | null, trailer: { id: string | null, site: string | null, thumbnail: string | null } | null, characters: { edges: Array<{ id: number | null, node: { id: number, image: { large: string | null, medium: string | null } | null, name: { full: string | null, native: string | null } | null } | null, voiceActors: Array<{ id: number, image: { large: string | null, medium: string | null } | null, name: { full: string | null, native: string | null } | null } | null> | null } | null> | null } | null, recommendations: { nodes: Array<{ id: number, mediaRecommendation: { id: number, title: { english: string | null, native: string | null, romaji: string | null } | null, coverImage: { extraLarge: string | null, large: string | null, medium: string | null } | null } | null } | null> | null } | null, relations: { edges: Array<{ id: number | null, relationType: MediaRelation | null, node: { format: MediaFormat | null, type: MediaType | null, id: number, title: { english: string | null, native: string | null, romaji: string | null } | null, coverImage: { extraLarge: string | null, large: string | null, medium: string | null } | null } | null } | null> | null } | null, staff: { nodes: Array<{ id: number, image: { large: string | null, medium: string | null } | null, name: { full: string | null, native: string | null } | null } | null> | null } | null };

export type MediaDetailQueryQueryVariables = Exact<{
  mediaId?: number | null | undefined;
  voiceActorLanguage?: StaffLanguage | null | undefined;
  recommendationSort?: Array<RecommendationSort | null | undefined> | RecommendationSort | null | undefined;
  staffSort?: Array<StaffSort | null | undefined> | StaffSort | null | undefined;
}>;


export type MediaDetailQueryQuery = { Media: { id: number, type: MediaType | null, synonyms: Array<string | null> | null, chapters: number | null, volumes: number | null, episodes: number | null, duration: number | null, averageScore: number | null, countryOfOrigin: unknown, bannerImage: string | null, hashtag: string | null, description: string | null, format: MediaFormat | null, genres: Array<string | null> | null, updatedAt: number | null, seasonYear: number | null, season: MediaSeason | null, source: MediaSource | null, siteUrl: string | null, status: MediaStatus | null, title: { english: string | null, romaji: string | null, native: string | null } | null, coverImage: { extraLarge: string | null, large: string | null, medium: string | null } | null, externalLinks: Array<{ icon: string | null, id: number, type: ExternalLinkType | null, url: string | null, site: string, language: string | null, siteId: number | null } | null> | null, nextAiringEpisode: { airingAt: number, episode: number, id: number, timeUntilAiring: number } | null, rankings: Array<{ allTime: boolean | null, context: string, rank: number, type: MediaRankType, format: MediaFormat, id: number, season: MediaSeason | null, year: number | null } | null> | null, endDate: { year: number | null, month: number | null, day: number | null } | null, startDate: { year: number | null, month: number | null, day: number | null } | null, streamingEpisodes: Array<{ title: string | null, thumbnail: string | null, url: string | null, site: string | null } | null> | null, studios: { nodes: Array<{ id: number, name: string, siteUrl: string | null } | null> | null } | null, trailer: { id: string | null, site: string | null, thumbnail: string | null } | null, characters: { edges: Array<{ id: number | null, node: { id: number, image: { large: string | null, medium: string | null } | null, name: { full: string | null, native: string | null } | null } | null, voiceActors: Array<{ id: number, image: { large: string | null, medium: string | null } | null, name: { full: string | null, native: string | null } | null } | null> | null } | null> | null } | null, recommendations: { nodes: Array<{ id: number, mediaRecommendation: { id: number, title: { english: string | null, native: string | null, romaji: string | null } | null, coverImage: { extraLarge: string | null, large: string | null, medium: string | null } | null } | null } | null> | null } | null, relations: { edges: Array<{ id: number | null, relationType: MediaRelation | null, node: { format: MediaFormat | null, type: MediaType | null, id: number, title: { english: string | null, native: string | null, romaji: string | null } | null, coverImage: { extraLarge: string | null, large: string | null, medium: string | null } | null } | null } | null> | null } | null, staff: { nodes: Array<{ id: number, image: { large: string | null, medium: string | null } | null, name: { full: string | null, native: string | null } | null } | null> | null } | null } | null };

export type PageInfoDataFragment = { pageInfo: { total: number | null, perPage: number | null, currentPage: number | null, lastPage: number | null, hasNextPage: boolean | null } | null };

export type StaffCardFragment = { age: number | null, description: string | null, gender: string | null, id: number, primaryOccupations: Array<string | null> | null, image: { large: string | null, medium: string | null } | null, name: { full: string | null, native: string | null } | null };

export type StaffDetailFragment = { age: number | null, id: number, description: string | null, homeTown: string | null, siteUrl: string | null, yearsActive: Array<number | null> | null, gender: string | null, primaryOccupations: Array<string | null> | null, name: { full: string | null, native: string | null, alternative: Array<string | null> | null } | null, image: { large: string | null, medium: string | null } | null, dateOfBirth: { day: number | null, month: number | null, year: number | null } | null, dateOfDeath: { day: number | null, month: number | null, year: number | null } | null, characterMedia: { edges: Array<{ id: number | null, node: { id: number, type: MediaType | null, coverImage: { extraLarge: string | null, large: string | null, medium: string | null } | null, title: { english: string | null, native: string | null, romaji: string | null } | null } | null, characters: Array<{ id: number, name: { full: string | null, native: string | null } | null, image: { large: string | null, medium: string | null } | null } | null> | null } | null> | null } | null };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: NonNullable<DocumentTypeDecoration<TResult, TVariables>['__apiType']>;
  private value: string;
  public __meta__?: Record<string, any> | undefined;

  constructor(value: string, __meta__?: Record<string, any> | undefined) {
    super(value);
    this.value = value;
    this.__meta__ = __meta__;
  }

  override toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const CharacterCardFragmentDoc = new TypedDocumentString(`
    fragment CharacterCard on Character {
  id
  description(asHtml: true)
  gender
  age
  name {
    full
    native
  }
  image {
    large
    medium
  }
}
    `, {"fragmentName":"CharacterCard"}) as unknown as TypedDocumentString<CharacterCardFragment, unknown>;
export const CharacterDetailFragmentDoc = new TypedDocumentString(`
    fragment CharacterDetail on Character {
  id
  description(asHtml: true)
  gender
  age
  favourites
  bloodType
  siteUrl
  name {
    full
    native
    alternative
    alternativeSpoiler
  }
  image {
    large
    medium
  }
  dateOfBirth {
    day
    month
    year
  }
  media(sort: $mediaSort) {
    edges {
      id
      node {
        id
        type
        coverImage {
          extraLarge
          large
          medium
        }
        title {
          english
          native
          romaji
        }
      }
      voiceActors(language: $voiceActorsLanguage, sort: $voiceActorsSort) {
        id
        name {
          full
          native
        }
        image {
          large
          medium
        }
      }
    }
  }
}
    `, {"fragmentName":"CharacterDetail"}) as unknown as TypedDocumentString<CharacterDetailFragment, unknown>;
export const MediaCardFragmentDoc = new TypedDocumentString(`
    fragment MediaCard on Media {
  title {
    romaji
    english
    native
  }
  coverImage {
    extraLarge
    large
    medium
  }
  averageScore
  description(asHtml: true)
  status
  id
  genres
  format
  type
}
    `, {"fragmentName":"MediaCard"}) as unknown as TypedDocumentString<MediaCardFragment, unknown>;
export const MediaBannerFragmentDoc = new TypedDocumentString(`
    fragment MediaBanner on Media {
  title {
    romaji
    english
    native
  }
  bannerImage
  id
  genres
  type
}
    `, {"fragmentName":"MediaBanner"}) as unknown as TypedDocumentString<MediaBannerFragment, unknown>;
export const MediaDetailFragmentDoc = new TypedDocumentString(`
    fragment MediaDetail on Media {
  id
  type
  synonyms
  title {
    english
    romaji
    native
  }
  chapters
  volumes
  episodes
  duration
  averageScore
  countryOfOrigin
  bannerImage
  hashtag
  coverImage {
    extraLarge
    large
    medium
  }
  description(asHtml: true)
  externalLinks {
    icon
    id
    type
    url
    site
    language
    siteId
  }
  format
  genres
  nextAiringEpisode {
    airingAt
    episode
    id
    timeUntilAiring
  }
  rankings {
    allTime
    context
    rank
    type
    format
    id
    season
    year
  }
  endDate {
    year
    month
    day
  }
  updatedAt
  seasonYear
  season
  startDate {
    year
    month
    day
  }
  source
  siteUrl
  status
  streamingEpisodes {
    title
    thumbnail
    url
    site
  }
  studios {
    nodes {
      id
      name
      siteUrl
    }
  }
  trailer {
    id
    site
    thumbnail
  }
  characters {
    edges {
      id
      node {
        id
        image {
          large
          medium
        }
        name {
          full
          native
        }
      }
      voiceActors(language: $voiceActorLanguage) {
        id
        image {
          large
          medium
        }
        name {
          full
          native
        }
      }
    }
  }
  recommendations(sort: $recommendationSort) {
    nodes {
      id
      mediaRecommendation {
        id
        title {
          english
          native
          romaji
        }
        coverImage {
          extraLarge
          large
          medium
        }
      }
    }
  }
  relations {
    edges {
      id
      relationType
      node {
        format
        type
        id
        title {
          english
          native
          romaji
        }
        coverImage {
          extraLarge
          large
          medium
        }
      }
    }
  }
  staff(sort: $staffSort) {
    nodes {
      id
      image {
        large
        medium
      }
      name {
        full
        native
      }
    }
  }
}
    `, {"fragmentName":"MediaDetail"}) as unknown as TypedDocumentString<MediaDetailFragment, unknown>;
export const PageInfoDataFragmentDoc = new TypedDocumentString(`
    fragment PageInfoData on Page {
  pageInfo {
    total
    perPage
    currentPage
    lastPage
    hasNextPage
  }
}
    `, {"fragmentName":"PageInfoData"}) as unknown as TypedDocumentString<PageInfoDataFragment, unknown>;
export const StaffCardFragmentDoc = new TypedDocumentString(`
    fragment StaffCard on Staff {
  age
  description(asHtml: true)
  gender
  id
  primaryOccupations
  image {
    large
    medium
  }
  name {
    full
    native
  }
}
    `, {"fragmentName":"StaffCard"}) as unknown as TypedDocumentString<StaffCardFragment, unknown>;
export const StaffDetailFragmentDoc = new TypedDocumentString(`
    fragment StaffDetail on Staff {
  age
  id
  description(asHtml: true)
  homeTown
  siteUrl
  yearsActive
  gender
  primaryOccupations
  name {
    full
    native
    alternative
  }
  image {
    large
    medium
  }
  dateOfBirth {
    day
    month
    year
  }
  dateOfDeath {
    day
    month
    year
  }
  characterMedia(sort: $characterMediaSort) {
    edges {
      id
      node {
        id
        type
        coverImage {
          extraLarge
          large
          medium
        }
        title {
          english
          native
          romaji
        }
      }
      characters {
        id
        name {
          full
          native
        }
        image {
          large
          medium
        }
      }
    }
  }
}
    `, {"fragmentName":"StaffDetail"}) as unknown as TypedDocumentString<StaffDetailFragment, unknown>;
export const MostFavoritedCharactersDocument = new TypedDocumentString(`
    query MostFavoritedCharacters($page: Int, $perPage: Int) {
  Page(page: $page, perPage: $perPage) {
    characters(sort: FAVOURITES_DESC) {
      ...CharacterCard
    }
    ...PageInfoData
  }
}
    fragment CharacterCard on Character {
  id
  description(asHtml: true)
  gender
  age
  name {
    full
    native
  }
  image {
    large
    medium
  }
}
fragment PageInfoData on Page {
  pageInfo {
    total
    perPage
    currentPage
    lastPage
    hasNextPage
  }
}`) as unknown as TypedDocumentString<MostFavoritedCharactersQuery, MostFavoritedCharactersQueryVariables>;
export const BirthdayCharactersDocument = new TypedDocumentString(`
    query BirthdayCharacters($page: Int, $perPage: Int) {
  Page(page: $page, perPage: $perPage) {
    characters(isBirthday: true, sort: FAVOURITES_DESC) {
      ...CharacterCard
    }
    ...PageInfoData
  }
}
    fragment CharacterCard on Character {
  id
  description(asHtml: true)
  gender
  age
  name {
    full
    native
  }
  image {
    large
    medium
  }
}
fragment PageInfoData on Page {
  pageInfo {
    total
    perPage
    currentPage
    lastPage
    hasNextPage
  }
}`) as unknown as TypedDocumentString<BirthdayCharactersQuery, BirthdayCharactersQueryVariables>;
export const CharacterAllDocument = new TypedDocumentString(`
    query CharacterAll($page: Int, $perPage: Int) {
  birthday: Page(page: $page, perPage: $perPage) {
    characters(isBirthday: true, sort: FAVOURITES_DESC) {
      ...CharacterCard
    }
    ...PageInfoData
  }
  mostFavorited: Page(page: $page, perPage: $perPage) {
    characters(sort: FAVOURITES_DESC) {
      ...CharacterCard
    }
    ...PageInfoData
  }
}
    fragment CharacterCard on Character {
  id
  description(asHtml: true)
  gender
  age
  name {
    full
    native
  }
  image {
    large
    medium
  }
}
fragment PageInfoData on Page {
  pageInfo {
    total
    perPage
    currentPage
    lastPage
    hasNextPage
  }
}`) as unknown as TypedDocumentString<CharacterAllQuery, CharacterAllQueryVariables>;
export const CharacterDetailQueryDocument = new TypedDocumentString(`
    query CharacterDetailQuery($characterId: Int, $mediaSort: [MediaSort], $voiceActorsLanguage: StaffLanguage, $voiceActorsSort: [StaffSort]) {
  Character(id: $characterId) {
    ...CharacterDetail
  }
}
    fragment CharacterDetail on Character {
  id
  description(asHtml: true)
  gender
  age
  favourites
  bloodType
  siteUrl
  name {
    full
    native
    alternative
    alternativeSpoiler
  }
  image {
    large
    medium
  }
  dateOfBirth {
    day
    month
    year
  }
  media(sort: $mediaSort) {
    edges {
      id
      node {
        id
        type
        coverImage {
          extraLarge
          large
          medium
        }
        title {
          english
          native
          romaji
        }
      }
      voiceActors(language: $voiceActorsLanguage, sort: $voiceActorsSort) {
        id
        name {
          full
          native
        }
        image {
          large
          medium
        }
      }
    }
  }
}`) as unknown as TypedDocumentString<CharacterDetailQueryQuery, CharacterDetailQueryQueryVariables>;
export const TrendingAnimeDocument = new TypedDocumentString(`
    query TrendingAnime($page: Int, $perPage: Int) {
  Page(page: $page, perPage: $perPage) {
    media(sort: TRENDING_DESC, type: ANIME) {
      ...MediaCard
    }
    ...PageInfoData
  }
}
    fragment MediaCard on Media {
  title {
    romaji
    english
    native
  }
  coverImage {
    extraLarge
    large
    medium
  }
  averageScore
  description(asHtml: true)
  status
  id
  genres
  format
  type
}
fragment PageInfoData on Page {
  pageInfo {
    total
    perPage
    currentPage
    lastPage
    hasNextPage
  }
}`) as unknown as TypedDocumentString<TrendingAnimeQuery, TrendingAnimeQueryVariables>;
export const PopularAnimeDocument = new TypedDocumentString(`
    query PopularAnime($page: Int, $perPage: Int) {
  Page(page: $page, perPage: $perPage) {
    media(sort: POPULARITY_DESC, type: ANIME) {
      ...MediaCard
    }
    ...PageInfoData
  }
}
    fragment MediaCard on Media {
  title {
    romaji
    english
    native
  }
  coverImage {
    extraLarge
    large
    medium
  }
  averageScore
  description(asHtml: true)
  status
  id
  genres
  format
  type
}
fragment PageInfoData on Page {
  pageInfo {
    total
    perPage
    currentPage
    lastPage
    hasNextPage
  }
}`) as unknown as TypedDocumentString<PopularAnimeQuery, PopularAnimeQueryVariables>;
export const PopularThisSeasonAnimeDocument = new TypedDocumentString(`
    query PopularThisSeasonAnime($page: Int, $perPage: Int, $season: MediaSeason, $seasonYear: Int) {
  Page(page: $page, perPage: $perPage) {
    media(
      sort: POPULARITY_DESC
      type: ANIME
      season: $season
      seasonYear: $seasonYear
    ) {
      ...MediaCard
    }
    ...PageInfoData
  }
}
    fragment MediaCard on Media {
  title {
    romaji
    english
    native
  }
  coverImage {
    extraLarge
    large
    medium
  }
  averageScore
  description(asHtml: true)
  status
  id
  genres
  format
  type
}
fragment PageInfoData on Page {
  pageInfo {
    total
    perPage
    currentPage
    lastPage
    hasNextPage
  }
}`) as unknown as TypedDocumentString<PopularThisSeasonAnimeQuery, PopularThisSeasonAnimeQueryVariables>;
export const UpcomingAnimeDocument = new TypedDocumentString(`
    query UpcomingAnime($page: Int, $perPage: Int, $season: MediaSeason, $seasonYear: Int) {
  Page(page: $page, perPage: $perPage) {
    media(
      sort: POPULARITY_DESC
      type: ANIME
      season: $season
      seasonYear: $seasonYear
    ) {
      ...MediaCard
    }
    ...PageInfoData
  }
}
    fragment MediaCard on Media {
  title {
    romaji
    english
    native
  }
  coverImage {
    extraLarge
    large
    medium
  }
  averageScore
  description(asHtml: true)
  status
  id
  genres
  format
  type
}
fragment PageInfoData on Page {
  pageInfo {
    total
    perPage
    currentPage
    lastPage
    hasNextPage
  }
}`) as unknown as TypedDocumentString<UpcomingAnimeQuery, UpcomingAnimeQueryVariables>;
export const TrendingAnimeBannerDocument = new TypedDocumentString(`
    query TrendingAnimeBanner($page: Int, $perPage: Int) {
  Page(page: $page, perPage: $perPage) {
    media(sort: TRENDING_DESC, type: ANIME) {
      ...MediaBanner
    }
    ...PageInfoData
  }
}
    fragment MediaBanner on Media {
  title {
    romaji
    english
    native
  }
  bannerImage
  id
  genres
  type
}
fragment PageInfoData on Page {
  pageInfo {
    total
    perPage
    currentPage
    lastPage
    hasNextPage
  }
}`) as unknown as TypedDocumentString<TrendingAnimeBannerQuery, TrendingAnimeBannerQueryVariables>;
export const AnimeAllDocument = new TypedDocumentString(`
    query AnimeAll($page: Int, $perPage: Int, $popularThisSeasonSeason: MediaSeason, $popularThisSeasonSeasonYear: Int, $upcomingSeason: MediaSeason, $upcomingSeasonYear: Int) {
  trendingAnimeBanner: Page(page: $page, perPage: $perPage) {
    media(sort: TRENDING_DESC, type: ANIME) {
      ...MediaBanner
    }
    ...PageInfoData
  }
  trending: Page(page: $page, perPage: $perPage) {
    media(sort: TRENDING_DESC, type: ANIME) {
      ...MediaCard
    }
    ...PageInfoData
  }
  popular: Page(page: $page, perPage: $perPage) {
    media(sort: POPULARITY_DESC, type: ANIME) {
      ...MediaCard
    }
    ...PageInfoData
  }
  popularThisSeason: Page(page: $page, perPage: $perPage) {
    media(
      sort: POPULARITY_DESC
      type: ANIME
      season: $popularThisSeasonSeason
      seasonYear: $popularThisSeasonSeasonYear
    ) {
      ...MediaCard
    }
    ...PageInfoData
  }
  upcoming: Page(page: $page, perPage: $perPage) {
    media(
      sort: POPULARITY_DESC
      type: ANIME
      season: $upcomingSeason
      seasonYear: $upcomingSeasonYear
    ) {
      ...MediaCard
    }
    ...PageInfoData
  }
}
    fragment MediaCard on Media {
  title {
    romaji
    english
    native
  }
  coverImage {
    extraLarge
    large
    medium
  }
  averageScore
  description(asHtml: true)
  status
  id
  genres
  format
  type
}
fragment MediaBanner on Media {
  title {
    romaji
    english
    native
  }
  bannerImage
  id
  genres
  type
}
fragment PageInfoData on Page {
  pageInfo {
    total
    perPage
    currentPage
    lastPage
    hasNextPage
  }
}`) as unknown as TypedDocumentString<AnimeAllQuery, AnimeAllQueryVariables>;
export const TrendingMangaDocument = new TypedDocumentString(`
    query TrendingManga($page: Int, $perPage: Int) {
  Page(page: $page, perPage: $perPage) {
    media(sort: TRENDING_DESC, type: MANGA) {
      ...MediaCard
    }
    ...PageInfoData
  }
}
    fragment MediaCard on Media {
  title {
    romaji
    english
    native
  }
  coverImage {
    extraLarge
    large
    medium
  }
  averageScore
  description(asHtml: true)
  status
  id
  genres
  format
  type
}
fragment PageInfoData on Page {
  pageInfo {
    total
    perPage
    currentPage
    lastPage
    hasNextPage
  }
}`) as unknown as TypedDocumentString<TrendingMangaQuery, TrendingMangaQueryVariables>;
export const PopularMangaDocument = new TypedDocumentString(`
    query PopularManga($page: Int, $perPage: Int) {
  Page(page: $page, perPage: $perPage) {
    media(sort: POPULARITY_DESC, type: MANGA) {
      ...MediaCard
    }
    ...PageInfoData
  }
}
    fragment MediaCard on Media {
  title {
    romaji
    english
    native
  }
  coverImage {
    extraLarge
    large
    medium
  }
  averageScore
  description(asHtml: true)
  status
  id
  genres
  format
  type
}
fragment PageInfoData on Page {
  pageInfo {
    total
    perPage
    currentPage
    lastPage
    hasNextPage
  }
}`) as unknown as TypedDocumentString<PopularMangaQuery, PopularMangaQueryVariables>;
export const PopularManhwaDocument = new TypedDocumentString(`
    query PopularManhwa($page: Int, $perPage: Int) {
  Page(page: $page, perPage: $perPage) {
    media(sort: POPULARITY_DESC, type: MANGA, countryOfOrigin: "KR") {
      ...MediaCard
    }
    ...PageInfoData
  }
}
    fragment MediaCard on Media {
  title {
    romaji
    english
    native
  }
  coverImage {
    extraLarge
    large
    medium
  }
  averageScore
  description(asHtml: true)
  status
  id
  genres
  format
  type
}
fragment PageInfoData on Page {
  pageInfo {
    total
    perPage
    currentPage
    lastPage
    hasNextPage
  }
}`) as unknown as TypedDocumentString<PopularManhwaQuery, PopularManhwaQueryVariables>;
export const TrendingMangaBannerDocument = new TypedDocumentString(`
    query TrendingMangaBanner($page: Int, $perPage: Int) {
  Page(page: $page, perPage: $perPage) {
    media(sort: TRENDING_DESC, type: MANGA) {
      ...MediaBanner
    }
    ...PageInfoData
  }
}
    fragment MediaBanner on Media {
  title {
    romaji
    english
    native
  }
  bannerImage
  id
  genres
  type
}
fragment PageInfoData on Page {
  pageInfo {
    total
    perPage
    currentPage
    lastPage
    hasNextPage
  }
}`) as unknown as TypedDocumentString<TrendingMangaBannerQuery, TrendingMangaBannerQueryVariables>;
export const MangaAllDocument = new TypedDocumentString(`
    query MangaAll($page: Int, $perPage: Int) {
  trendingMangaBanner: Page(page: $page, perPage: $perPage) {
    media(sort: TRENDING_DESC, type: MANGA) {
      ...MediaBanner
    }
    ...PageInfoData
  }
  trending: Page(page: $page, perPage: $perPage) {
    media(sort: TRENDING_DESC, type: MANGA) {
      ...MediaCard
    }
    ...PageInfoData
  }
  popular: Page(page: $page, perPage: $perPage) {
    media(sort: POPULARITY_DESC, type: MANGA) {
      ...MediaCard
    }
    ...PageInfoData
  }
  popularManhwa: Page(page: $page, perPage: $perPage) {
    media(sort: POPULARITY_DESC, countryOfOrigin: KR, type: MANGA) {
      ...MediaCard
    }
    ...PageInfoData
  }
}
    fragment MediaCard on Media {
  title {
    romaji
    english
    native
  }
  coverImage {
    extraLarge
    large
    medium
  }
  averageScore
  description(asHtml: true)
  status
  id
  genres
  format
  type
}
fragment MediaBanner on Media {
  title {
    romaji
    english
    native
  }
  bannerImage
  id
  genres
  type
}
fragment PageInfoData on Page {
  pageInfo {
    total
    perPage
    currentPage
    lastPage
    hasNextPage
  }
}`) as unknown as TypedDocumentString<MangaAllQuery, MangaAllQueryVariables>;
export const MediaDetailQueryDocument = new TypedDocumentString(`
    query MediaDetailQuery($mediaId: Int, $voiceActorLanguage: StaffLanguage, $recommendationSort: [RecommendationSort], $staffSort: [StaffSort]) {
  Media(id: $mediaId) {
    ...MediaDetail
  }
}
    fragment MediaDetail on Media {
  id
  type
  synonyms
  title {
    english
    romaji
    native
  }
  chapters
  volumes
  episodes
  duration
  averageScore
  countryOfOrigin
  bannerImage
  hashtag
  coverImage {
    extraLarge
    large
    medium
  }
  description(asHtml: true)
  externalLinks {
    icon
    id
    type
    url
    site
    language
    siteId
  }
  format
  genres
  nextAiringEpisode {
    airingAt
    episode
    id
    timeUntilAiring
  }
  rankings {
    allTime
    context
    rank
    type
    format
    id
    season
    year
  }
  endDate {
    year
    month
    day
  }
  updatedAt
  seasonYear
  season
  startDate {
    year
    month
    day
  }
  source
  siteUrl
  status
  streamingEpisodes {
    title
    thumbnail
    url
    site
  }
  studios {
    nodes {
      id
      name
      siteUrl
    }
  }
  trailer {
    id
    site
    thumbnail
  }
  characters {
    edges {
      id
      node {
        id
        image {
          large
          medium
        }
        name {
          full
          native
        }
      }
      voiceActors(language: $voiceActorLanguage) {
        id
        image {
          large
          medium
        }
        name {
          full
          native
        }
      }
    }
  }
  recommendations(sort: $recommendationSort) {
    nodes {
      id
      mediaRecommendation {
        id
        title {
          english
          native
          romaji
        }
        coverImage {
          extraLarge
          large
          medium
        }
      }
    }
  }
  relations {
    edges {
      id
      relationType
      node {
        format
        type
        id
        title {
          english
          native
          romaji
        }
        coverImage {
          extraLarge
          large
          medium
        }
      }
    }
  }
  staff(sort: $staffSort) {
    nodes {
      id
      image {
        large
        medium
      }
      name {
        full
        native
      }
    }
  }
}`) as unknown as TypedDocumentString<MediaDetailQueryQuery, MediaDetailQueryQueryVariables>;