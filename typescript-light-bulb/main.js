'use strict';
const $lightBulb = document.querySelector('.bulb');
const $background = document.querySelector('.back');
if (!$lightBulb) throw new Error('$lightBulb query failed');
if (!$background) throw new Error('$background query failed');
let lightOn = true;
$lightBulb.addEventListener('click', () => {
  if (lightOn) {
    lightOn = false;
    $lightBulb.className = 'bulb bulb-dark';
    $background.className = 'back back-dark';
  } else {
    lightOn = true;
    $lightBulb.className = 'bulb bulb-light';
    $background.className = 'back back-light';
  }
});
