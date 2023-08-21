import navMenuListener from "./events/navMenuListener.js";
import openMenuListener from "./events/openMenuListener.js";
import navMenuCloseListener from "./events/navMenuCloseListener.js";
import dom from "./dom.js";


openMenuListener();
navMenuListener();
navMenuCloseListener();

dom.mobileOpenMenu.addEventListener('click', () => {
  dom.sound.play();
  dom.sound.volume = 0.3;
});


// const box = document.querySelector('.box');
// let isDragging = false;
// let startMouseX, startMouseY, startRotateY, startRotateX = 0;

// box.addEventListener('mousedown', (e) => {
//     isDragging = true;
//     startMouseX = e.clientX;
//     startMouseY = e.clientY;
//     startRotateY = getCurrentRotateY();
//     startRotateX = getCurrentRotateX();
//     e.preventDefault();
// });

// document.addEventListener('mouseup', () => {
//     isDragging = false;
// });

// document.addEventListener('mousemove', (e) => {
//     if (!isDragging) return;

//     const rotateDiff = (e.clientX - startMouseX) * 0.5;
//     const newRotateY = startRotateY + rotateDiff;
//     const newRotateX = startRotateX + rotateDiff;

//     box.style.transform = `rotateY(${newRotateY}deg) rotateX(${newRotateX}deg)`;

// });

// const getCurrentRotateY = () => {
//     const transform = getComputedStyle(box).getPropertyValue('transform');
//     const values = transform.split('(')[1].split(')')[0].split(',');
//     const a = values[0];
//     const b = values[1];

//     return Math.round(Math.atan2(b, a) * (180 / Math.PI));
// }

// const getCurrentRotateX = () => {
//   const transform = getComputedStyle(box).getPropertyValue('transform');
//   const values = transform.split('(')[1].split(')')[0].split(',');
//   const a = values[5];
//   const c = values[4];

//   return Math.round(Math.atan2(c, a) * (180 / Math.PI));
// }
