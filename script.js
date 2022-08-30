console.log("Hello from Javascript")
const songList=[
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
];

window.onload = function() {
    const songsWrapper = document.getElementById("songs-wrapper");
    songsWrapper.innerHTML="";
    for (let i=0; i<songList.length;i++){
        songsWrapper.innerHTML += melodyComponent(i+1, songList[i]);
    }
}

const melodyComponent = function(index, songInfo) {
    return `<div class="melody">
    <span class="song-nr">
        ${index}
    </span>
    <img src="${songInfo.imageLink}" class="song-cover">
    <span class="song-title">
        ${songInfo.title}
    </span>
    <span class="song-album">
        ${songInfo.album}
    </span>
    <span class="song-duration">
        ${songInfo.duration}
    </span>
</div>`
}