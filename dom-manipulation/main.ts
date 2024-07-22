let clickCount = 0;

const $hotButton = document.querySelector('.hot-button');
const $clickCount = document.querySelector('.click-count');

if (!$hotButton) throw new Error('$hotButton query failed');
if (!$clickCount) throw new Error('$clickCount does not exist');

function handleClick(): void {
  if (!$hotButton || !$clickCount)
    throw new Error('$hotButton or $clickCount query failed');

  clickCount++;
  $clickCount.textContent = `Clicks: ${clickCount}`;
  switch (clickCount) {
    case 4:
      $hotButton.className = 'hot-button cool';
      break;
    case 7:
      $hotButton.className = 'hot-button tepid';
      break;
    case 10:
      $hotButton.className = 'hot-button warm';
      break;
    case 13:
      $hotButton.className = 'hot-button hot';
      break;
    case 16:
      $hotButton.className = 'hot-button nuclear';
      break;
  }
}

$hotButton.addEventListener('click', handleClick);
