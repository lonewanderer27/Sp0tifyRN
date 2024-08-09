export enum LyricTypeType {
  Lyric = "lyric",
  Annotation = "annotation",
} 

export interface LyricType {
  index: number;
  text: string;
  type: LyricTypeType;
}

export interface SongItemType {
  title: string;
  artist: string;
  albumCover: string;
}