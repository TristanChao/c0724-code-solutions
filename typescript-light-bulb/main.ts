const $lightBulb = document.querySelector('.bulb');
const $background = document.querySelector('.back');

if (!$lightBulb) throw new Error('$lightBulb query failed');
if (!$background) throw new Error('$background query failed');

let lightOn = true;

$lightBulb.addEventListener('click', () => {
  if (lightOn) lightOn = false;
  else if (!lightOn) lightOn = true;

  if (!lightOn) {
    $lightBulb.className = 'bulb bulb-dark';
    $background.className = 'back back-dark';
  } else {
    $lightBulb.className = 'bulb bulb-light';
    $background.className = 'back back-light';
  }
});
