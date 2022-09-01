import React from "react";
import {ISongInfo, Song} from "../Song/Song";
import styles from"./Playlist.module.scss";

const songList: ISongInfo[] = [
    {
        imageLink: "./assets/Joji.jfif",
        title: "Slow Dancing in the Dark",
        album: "Joji",
        duration:"3:29"
   },
   {
       imageLink: "./assets/RealRx.jfif",
       title: "12 Stout Street",
       album: "RealRx",
       duration: "1:58"
   },
   {
       imageLink: "./assets/Skillet.jfif",
       title: "Monster",
       album: "Skillet",
       duration: "2:58"
   },
   {
       imageLink: "./assets/Eminem.jfif",
       title: "Godzilla",
       album: "Eminem",
       duration: "3:32"
   },
   {
       imageLink: "./assets/DJ Spizdil.jfif",
       title: "Malo Tebya (Hardstyle Remix)",
       album: "DJ Spizdil",
       duration:"2:46"
  },
];
export const Playlist = function () {

    return (
        <div className={styles.playlist}>
<div className={styles["table-header"]}>
                    <span className={styles["song-nr"]}>
                        #
                    </span>
                    <span className={styles["song-cover"]}>
                        Cover
                    </span>
                    <span className={styles["song-title"]}>
                        Title
                    </span>
                    <span className={styles["song-album"]}>
                        Album
                    </span>
                    <span className={styles["song-duration"]}>
                        Duration
                    </span>
</div>
            <div id="songs-wrapper" className={styles["songs"]}>
                 {/*<Song index={1} songInfo={songList[0]}/>*/}
                 {songList.map(function (details,index){
                 return <Song index={index + 1} songInfo={details} />
                })}
            </div>
        </div>
    );
};