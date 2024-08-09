import * as cheerio from "cheerio";

import { LyricType, LyricTypeType } from "@/types";

import { GeniusSong } from "@/types/music";
import { Result } from "@/types/search";
import jq from "../lib/jq";
import axios from "axios";

export const genius = axios.create({
  baseURL: "https://api.genius.com",
  headers: {
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_GENIUS_CLIENT_ACCESS_TOKEN}`,
  },
});

export const Genius = {
  async search(query: string) {
    const res = await genius.get(`/search?q=${query}`);
    const filter = jq.compile(
      '.. | .result? | select(.lyrics_state? == "complete")'
    );
    const songs: Result[] = [];
    for (const i of filter(res.data)) {
      songs.push(i);
    }
    // log the amount of songs found
    console.log("songs found: ", songs.length);
    return {
      server: res.data,
      songs: songs,
    };
  },
  async getSongFromId(id: number) {
    const res = await genius.get<GeniusSong>(`/songs/${id}`);
    console.log("song from id: ", res.data);
    return {
      server: res.data,
      song: res.data.response.song,
    };
  },
  async getLyricsFromSongPath(songPath: string) {
    const res = await genius.get(`https://genius.com${songPath}`);
    let $ = cheerio.load(res.data);
    const dataX = $(`[class^="Lyrics__Container"]`);
    const lyrics: LyricType[] = [];
    let index = 0;
    dataX.each((i, el) => {
      const dtx = $(el).html();
      $ = cheerio.load(dtx + "");
      $("br").replaceWith("\n");
      const XRT = $.text();
      const strings = XRT.split("\n");
      strings.forEach((str) => {
        lyrics.push({
          index: index++, // increment index for each lyric
          text: str,
          type: str.includes("[")
            ? LyricTypeType.Annotation
            : LyricTypeType.Lyric,
        });
      });
    });

    console.log("lyrics: ", lyrics);

    return {
      lyrics,
    };
  },
};
