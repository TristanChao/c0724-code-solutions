const $countdownDisplay = document.querySelector('.countdown-display');

if (!$countdownDisplay) throw new Error('$countdownDisplay query failed');

let count = 4;

const intervalId = setInterval(function () {
  count--;
  if (count > 0) {
    $countdownDisplay.textContent = count.toString();
  } else {
    $countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalId);
  }
}, 1000);
