import styles from "./Song.module.scss";


export interface ISongInfo {
    imageLink: string;
    title: string;
    album: string;
    duration: string; 
}

export interface IProps {
    index: number;
    songInfo: ISongInfo;
}

export const Song = (props: IProps) => {
    const index = props.index;
    const songInfo = props.songInfo;
    return (
        <div className={styles["melody"]}>
        <span className={styles["song-nr"]}>
            {index}
        </span>
        <img src={songInfo.imageLink} className={styles["song-cover"]}/>
        <span className={styles["song-title"]}>
            {songInfo.title}
        </span>
        <span className={styles["song-album"]}>
            {songInfo.album}
        </span>
        <span className={styles["song-duration"]}>
            {songInfo.duration}
        </span>
        </div>
    );
}