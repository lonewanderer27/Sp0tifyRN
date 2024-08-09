export interface SearchGenius {
  meta: Meta;
  response: Response;
}

export interface Meta {
  status: number;
}

export interface Response {
  sections: Section[];
}

export interface Section {
  type: string;
  hits: Hit[];
}

export interface Hit {
  highlights: Highlight[];
  index: string;
  type: string;
  result: Result;
}

export interface Highlight {
  property: string;
  value: string;
  snippet: boolean;
  ranges: Range[];
}

export interface Range {
  start: number;
  end: number;
}

export interface Result {
  _type: string;
  annotation_count?: number;
  api_path: string;
  artist_names?: string;
  full_title?: string;
  header_image_thumbnail_url?: string;
  header_image_url?: string;
  id: number;
  instrumental?: boolean;
  lyrics_owner_id?: number;
  lyrics_state?: string;
  lyrics_updated_at?: number;
  path?: string;
  pyongs_count?: number | null;
  relationships_index_url?: string;
  release_date_components?: ReleaseDateComponents | null;
  release_date_for_display?: null | string;
  release_date_with_abbreviated_month_for_display?: null | string;
  song_art_image_thumbnail_url?: string;
  song_art_image_url?: string;
  stats?: Stats;
  title: string;
  title_with_featured?: string;
  updated_by_human_at?: number;
  url: string;
  featured_artists?: any[];
  primary_artist?: PrimaryArtist;
  article_url?: string;
  author_list_for_display?: string;
  dek?: string;
  description?: string;
  dfp_kv?: DfpKv[];
  duration?: number;
  poster_attributes?: PosterAttributes;
  poster_url?: string;
  provider?: string;
  provider_id?: string;
  provider_params?: ProviderParam[];
  short_title?: string;
  type?: string;
  video_attributes?: PosterAttributes;
  current_user_metadata?: ResultCurrentUserMetadata;
  published_at?: number;
  view_count?: number;
  author?: Author;
  sponsorship?: Sponsorship;
}

export interface Author {
  _type: string;
  about_me_summary: string;
  api_path: string;
  avatar: Avatar;
  header_image_url: string;
  human_readable_role_for_display: string;
  id: number;
  iq: number;
  is_meme_verified: boolean;
  is_verified: boolean;
  login: string;
  name: string;
  role_for_display: string;
  url: string;
  current_user_metadata: AuthorCurrentUserMetadata;
}

export interface Avatar {
  tiny: Medium;
  thumb: Medium;
  small: Medium;
  medium: Medium;
}

export interface Medium {
  url: string;
  bounding_box: PosterAttributes;
}

export interface PosterAttributes {
  height: number;
  width: number;
}

export interface AuthorCurrentUserMetadata {
  permissions: any[];
  excluded_permissions: string[];
  interactions: Interactions;
}

export interface Interactions {
  following: boolean;
}

export interface ResultCurrentUserMetadata {
  permissions: any[];
  excluded_permissions: string[];
}

export interface DfpKv {
  name: string;
  values: string[];
}

export interface PrimaryArtist {
  _type: string;
  api_path: string;
  header_image_url: string;
  id: number;
  image_url: string;
  index_character: string;
  is_meme_verified: boolean;
  is_verified: boolean;
  name: string;
  slug: string;
  url: string;
  iq?: number;
}

export interface ProviderParam {
  name: string;
  value: string;
}

export interface ReleaseDateComponents {
  year: number;
  month: number;
  day: number;
}

export interface Sponsorship {
  _type: string;
  api_path: string;
  sponsor_image: null;
  sponsor_image_style: string;
  sponsor_link: null;
  sponsor_phrase: null;
  sponsored: boolean;
}

export interface Stats {
  unreviewed_annotations: number;
  concurrents?: number;
  hot: boolean;
  pageviews?: number;
}
