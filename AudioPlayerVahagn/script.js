var data = {
    title: [
        "Outlandish - Callin U",
        "Cheriimoya-Living Life-In The Night",
        "DVRST-Close Eyes",
        "PlayaPhonk - PHONKY TOWN"
    ],
    song: [
        "musics/Outlandish - Callin U.mp3",
        "musics/Cheriimoya-Living Life-In The Night.mp3",
        "musics/DVRST-Close Eyes.mp3",
        "musics/PlayaPhonk - PHONKY TOWN.mp3"
    ],
    poster: [
        "https://i.gifer.com/7tC5.gif",
        "https://i.gifer.com/XUbd.gif",
        "https://i.gifer.com/7BPQ.gif",
        "https://i.gifer.com/65t.gif"
    ]
}
var song = new Audio()
var currentSong = 0;
console.log(song);


window.onload = function () {
    playSong()
}

function playSong() {
    song.src = data.song[currentSong];
    let songTitle = document.getElementById("songTitle");
    songTitle.textContent = data.title[currentSong];

    let img = document.getElementById("row1");
    img.style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    let main = document.getElementById("main")
    main.style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    song.play();
}



function playOrPauseSong() {
    let play = document.getElementById("play");


    if (song.paused) {
        song.play();
        play.src = "images/pause1.png" //pause
    } else {
        song.pause();
        play.src = "images/play-button1.png" //play
    }

}



song.addEventListener("timeupdate", function () {
    // console.log(song.currentTime);
    // console.log(song.duration);

    let fill = document.getElementById("fill")

    let position = song.currentTime / song.duration;
    fill.style.width = position * 100 + "%";

    convertTime(song.currentTime)


    if (song.ended) {
        next()
    }

})


function convertTime(seconds) {
    let currentTime = document.getElementById("currentTime");

    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);

    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    currentTime.textContent = min + ":" + sec;


    totalTime(Math.round(song.duration))
}



function totalTime(seconds) {

    var min = Math.floor(seconds / 60)
    var sec = Math.floor(seconds % 60)
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;


    if (isNaN(min) || isNaN(sec)) {
        return false
    } else {

        currentTime.textContent += " / " + min + ":" + sec
    }

}



function next() {
    currentSong++;
    console.log(currentSong);
    if (currentSong == data.song.length) {
        currentSong = 0
    }

    playSong();
    play.src = "images/pause1.png"
}

function pre() {
    currentSong--;

    if (currentSong < 0) {
        currentSong = data.song.length - 1
    }
    playSong();
    play.src = "images/pause1.png"
}


function mute() {
    var mute = document.getElementById("mute")
    if(song.muted) {
        song.muted = false
        mute.src = "images/volume1.png"    //mute
    } else {
        song.muted = true
        mute.src = "images/volume-mute1.png"    //unmute
    }
}

function decrease () {
    song.volume -= 0.2;
} 

function increase () {
    song.volume += 0.2;
}