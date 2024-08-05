const $leftBtn = document.querySelector('#left-btn');
const $rightBtn = document.querySelector('#right-btn');
const navBtns = document.querySelectorAll('.nav-btn');
const navBtnIcons = document.querySelectorAll('.nav-btn > i');
const $navBtnDiv = document.querySelector('#nav-btn-div');
const $centerImg = document.querySelector('#center-img');

if (!$leftBtn) throw new Error('$leftBtn query failed');
if (!$rightBtn) throw new Error('$rightBtn query failed');
if (!navBtns) throw new Error('$navBtns query failed');
if (!navBtnIcons) throw new Error('$navBtnIcons query failed');
if (!$navBtnDiv) throw new Error('$navBtnDiv query failed');
if (!$centerImg) throw new Error('$centerImg query failed');

const imageUrls = [
  'images/001.png',
  'images/004.png',
  'images/007.png',
  'images/025.png',
  'images/039.png',
];

let imageIndex = 0;
let intervalId = setInterval(nextImage, 3000);

function nextImage(): void {
  navBtnIcons[imageIndex].className = 'fa-regular fa-circle';

  if (!$centerImg) throw new Error('$centerImg query failed');

  if (imageIndex === 4) {
    imageIndex = 0;
  } else {
    imageIndex++;
  }

  $centerImg.setAttribute('src', imageUrls[imageIndex]);
  navBtnIcons[imageIndex].className = 'fa-solid fa-circle';
}

function previousImage(): void {
  navBtnIcons[imageIndex].className = 'fa-regular fa-circle';

  if (!$centerImg) throw new Error('$centerImg query failed');

  if (imageIndex === 0) {
    imageIndex = 4;
  } else {
    imageIndex--;
  }

  $centerImg.setAttribute('src', imageUrls[imageIndex]);
  navBtnIcons[imageIndex].className = 'fa-solid fa-circle';
}

function changeIndex(index: number): void {
  if (!$centerImg) throw new Error('$centerImg query failed');

  navBtnIcons[imageIndex].className = 'fa-regular fa-circle';

  imageIndex = index;

  navBtnIcons[imageIndex].className = 'fa-solid fa-circle';
  $centerImg.setAttribute('src', imageUrls[imageIndex]);
}

$rightBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  nextImage();
  intervalId = setInterval(nextImage, 3000);
});

$leftBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  previousImage();
  intervalId = setInterval(nextImage, 3000);
});

$navBtnDiv.addEventListener('click', (event: Event) => {
  const $target = event.target as HTMLElement;

  const $targetBtn = $target.closest('button');

  if (!$targetBtn) throw new Error('$targetBtn does not exist');

  const targetId = $targetBtn.id;

  const targetIndex = Number(targetId[targetId.length - 1]);

  clearInterval(intervalId);

  changeIndex(targetIndex);

  intervalId = setInterval(nextImage, 3000);
});
