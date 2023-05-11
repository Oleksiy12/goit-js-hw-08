// import throttle from 'lodash';
import Player from '@vimeo/player';
// const player = new Player("vimeo-player");


// const saveCurrentTime = (time) => {
//     localStorage.setItem('videoplayer-current-time', time);
//   };
//   player.on('timeupdate', throttle(() => {
//     const currentTime = player.currentTime();
//     saveCurrentTime(currentTime);
//   }, 1000));

//   const savedTime = localStorage.getItem('videoplayer-current-time');
// if (savedTime) {
//   player.setCurrentTime(parseFloat(savedTime));
// }

const iframe = document.querySelector("iframe");

