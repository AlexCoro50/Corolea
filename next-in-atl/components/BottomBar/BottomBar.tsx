import { useEffect, useRef, useState } from "react";
import { IPrimary } from "../../slices/Song";
import styles from "./BottomBar.module.scss"

interface IProps {
    songInfo: IPrimary;
    changeNext: () => void;
    changePrev: () => void;
}

export const BottomBar = (props: IProps) => {
    const songInfo = props.songInfo;
    const nextSong = props.changeNext;
    const prevSong = props.changePrev;
    const [playing, setPlaying] = useState(false);
    const [currentSong, setCurrentSong] = useState(typeof Audio !== "undefined" && new Audio(""));

    useEffect(() => {
        console.log("I'll play", songInfo)
        const audio = songInfo.songLink && typeof Audio !== "undefined" && new Audio(songInfo.songLink?.url);
        if (audio) {
            if (!!currentSong) {
            currentSong.pause();
            }
        audio.preload = "metadata";
        audio.onloadedmetadata = () => setCurrentSong(audio);
        }
    }, [songInfo]);

    useEffect(() => {
        if (currentSong) {
            if (playing) {
                currentSong.play();
            } else {
                currentSong.pause();
            }
        }
    }, [playing]);
    
    useEffect(() => {
       if(!!currentSong && currentSong.duration) {
           setPlaying(true);
           currentSong.play();
       }
    }, [currentSong]);
     return (<div className={styles.wrapper}>
        <div className={styles.songControlButton} onClick={prevSong}>
            {"<"}
        </div>
            <div className={styles.button} onClick={() => setPlaying(!playing)}>
                {playing ? "||" : ">"}
            </div>
        <div className={styles.songControlButton} onClick={nextSong}>
           {">"}
        </div>
     </div>)



}