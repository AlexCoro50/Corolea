import React, { useEffect, useState } from 'react'
import { PrismicRichText } from '@prismicio/react'
import styles from "./Song.module.scss"
import { ISliceContext } from '../../components/Playlist/Playlist';

interface IImage {
  dimensions: {
    width: number;
    height: number;
  };
  alt: string | null;
  copyright: string | null;
  url: string;
}
export interface IPrimary {
  title: string;
  album: string;
  cover: IImage;
  songLink: {
    link_type: string;
    url: string;
  }
}
export interface IProps {
  slice: {primary: IPrimary};
  context: ISliceContext;
}

const Song = ({ slice, context }: IProps) => {
  const setSong = context.setSong;
  const songsList = context.songsList;
  const [index, setIndex] = useState(songsList.findIndex(searchSong => searchSong.title === slice.primary.title && searchSong.album === slice.primary.album));
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = slice?.primary?.songLink && typeof Audio !== "undefined" && new Audio(slice?.primary?.songLink?.url);
    if (audio) {
      audio.preload = "metadata";
      audio.onloadedmetadata = () => setDuration(audio.duration);
    }
  }, []);


  return (
    <div className={styles["melody"]} onClick={() => setSong(index)}>
        <span className={styles["song-nr"]}>
            {index + 1}
        </span>
        <img src={slice.primary.cover.url} className={styles["song-cover"]}/>
        <span className={styles["song-title"]}>
            {slice.primary.title}
        </span>
        <span className={styles["song-album"]}>
            {slice.primary.album}
        </span>
        <span className={styles["song-duration"]}>
            {`${Math.floor(duration/60)}:${Math.floor(duration%60)}`}
        </span>
        </div>
  );
}

export default Song

/*
true && true && false && true ...

|| 
false || false || true || false ...
*/