let songs = [
  {
    title: "Saiyaara",
    artist: "Faheem Abdullah",
    src: "songs/saiyaara.mp4",
    cover: "covers/saiyaara.jpg",
    lyrics: "Tu_paas_hai_mere_paas_hai_aise_Mera_koi_ehsaas_hai_jaise_._._.audio"
  },
//   {
//     title: "Tera Zikr",
//     artist: "Darshan Raval",
//     src: "songs/terazikr.mp3",
//     cover: "covers/terazikr.jpg",
//     lyrics: Tera zikr hai ya ik sukoon hai...
//   }
]
let current = 0;
let audio = document.getElementById("audio");

function loadSong(index) {
  document.getElementById("song-title").innerText = songs[index].title;
  document.getElementById("artist").innerText = songs[index].artist;
  document.getElementById("cover").src = songs[index].cover;
  document.getElementById("audio").src = songs[index].src;
  document.getElementById("lyrics-text").innerText = songs[index].lyrics;
}

function playPause() {
  if (audio.paused) audio.play();
  else audio.pause();
}

function nextSong() {
  current = (current + 1) % songs.length;
  loadSong(current);
  audio.play();
}

function prevSong() {
  current = (current - 1 + songs.length) % songs.length;
  loadSong(current);
  audio.play();
}

// Load first song by default
window.onload = () => loadSong(current);
