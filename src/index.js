import './css/index.css';
import song from './assets/music/hey.mp3';

const audio = new Audio(song);
audio.volume = 0.2;
const playButton = document.getElementById('play');

playButton.addEventListener('click', () => {

  if (audio.isPlaying) {
    audio.pause();
    
  } else {
    audio.play();
  }
});

