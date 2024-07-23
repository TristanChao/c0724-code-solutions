const $lightBulb = document.querySelector('.bulb');
const $background = document.querySelector('.back');

if (!$lightBulb) throw new Error('$lightBulb query failed');
if (!$background) throw new Error('$background query failed');

$lightBulb.addEventListener('click', () => {
  if ($lightBulb.className === 'bulb bulb-light') {
    $lightBulb.className = 'bulb bulb-dark';
    $background.className = 'back back-dark';
  } else {
    $lightBulb.className = 'bulb bulb-light';
    $background.className = 'back back-light';
  }
});
