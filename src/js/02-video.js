// import Player from '@vimeo/player';
// import { result } from 'lodash';
// const iframe = document.getElementById("vimeo-player");

// const player = new Player(iframe);
   
// player.on('play', onPlay);

// function onPlay(event){
//     let result = event.seconds;
//     console.log(result);



// }

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// Створення екземпляру плеєра
const playerElement = document.getElementById('vimeo-player');
const player = new Player(playerElement, {
  url: 'https://player.vimeo.com/video/236203659'
});

// Отримання та збереження часу відтворення
player.on('timeupdate', throttle(() => {
  player.getCurrentTime().then((seconds) => {
    localStorage.setItem('videoplayer-current-time', seconds);
  });
}, 1000));

// Відновлення відтворення зі збереженої позиції
const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
  player.setCurrentTime(savedTime);
}