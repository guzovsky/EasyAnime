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

export type TestQueryQueryVariables = Exact<{
  page?: number | null | undefined;
  perPage?: number | null | undefined;
}>;


export type TestQueryQuery = { Page: { media: Array<{ title: { romaji: string | null, english: string | null, native: string | null } | null } | null> | null } | null };

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
export const TestQueryDocument = new TypedDocumentString(`
    query TestQuery($page: Int, $perPage: Int) {
  Page(page: $page, perPage: $perPage) {
    media {
      title {
        romaji
        english
        native
      }
    }
  }
}
    `) as unknown as TypedDocumentString<TestQueryQuery, TestQueryQueryVariables>;