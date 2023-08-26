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


// Kwadrat

// const box = document.querySelector('.box');
// let isDragging = false;
// let startMouseX, startMouseY, startRotateY, startRotateX = 0;

// box.addEventListener('mousedown', startDrag);
// box.addEventListener('touchstart', startDragTouch);

// document.addEventListener('mouseup', stopDrag);
// document.addEventListener('touchend', stopDrag);

// document.addEventListener('mousemove', drag);
// document.addEventListener('touchmove', dragTouch, { passive: false });

// function startDrag(e) {
//   isDragging = true;
//   startMouseX = e.clientX;
//   startMouseY = e.clientY;
//   startRotateY = getCurrentRotateY();
//   startRotateX = getCurrentRotateX();
//   e.preventDefault();
// }

// function startDragTouch(e) {
//   const touch = e.touches[0];
//   startDrag(touch);
// }

// function stopDrag() {
//   isDragging = false;
// }

// function drag(e) {
//   if (!isDragging) return;

//   const rotateDiff = (e.clientX - startMouseX) * 0.5;
//   const newRotateY = startRotateY + rotateDiff;
//   const newRotateX = startRotateX + rotateDiff;

//   box.style.transform = `rotateY(${newRotateY}deg) rotateX(${newRotateX}deg)`;
// }

// function dragTouch(e) {
//   const touch = e.touches[0];
//   drag(touch);
// }

// function getCurrentRotateY() {
//   const transform = getComputedStyle(box).getPropertyValue('transform');
//   const values = transform.split('(')[1].split(')')[0].split(',');
//   const a = values[0];
//   const b = values[1];

//   return Math.round(Math.atan2(b, a) * (180 / Math.PI));
// }

// function getCurrentRotateX() {
//   const transform = getComputedStyle(box).getPropertyValue('transform');
//   const values = transform.split('(')[1].split(')')[0].split(',');
//   const a = values[5];
//   const c = values[4];

//   return Math.round(Math.atan2(c, a) * (180 / Math.PI));
// }



const btnLeft = document.querySelector(".previous");
const btnRight = document.querySelector(".next");

const a = document.getElementById("box1");
const b = document.getElementById("box2");
const c = document.getElementById("box3");
const d = document.getElementById("box4");

const boxList = [a, b, c, d];

let currentBox = boxList[1];
currentBox.classList.add('currentBox');
let currentIndex = 1;

let position = -25;
let toLeftPosition = -25;
let toRightPosition = 25;

btnRight.addEventListener(`click`, () => {
  if (currentIndex < boxList.length - 1) {
    document.getElementById("sliderBox").style.transform = `translateX( ${
      position + toLeftPosition
    }%)`;
    position += toLeftPosition;

    currentBox.style.transform = "scale(0.5)";
    currentBox.style.opacity = "0.6";
    currentBox = boxList[currentIndex + 1];
    currentIndex = currentIndex + 1;
    currentBox.style.transform = "scale(1)";
    currentBox.style.opacity = "1";
  }
});

btnLeft.addEventListener(`click`, () => {
  if (currentIndex > 0) {
    document.getElementById("sliderBox").style.transform = `translateX( ${
      position + toRightPosition
    }%)`;
    position += toRightPosition;

    currentBox.style.transform = "scale(0.5)";
    currentBox.style.opacity = "0.6";
    currentBox = boxList[currentIndex - 1];
    currentIndex = currentIndex - 1;
    currentBox.style.transform = "scale(1)";
    currentBox.style.opacity = "1";
  }
});
