const typeSentences = [
  'wizards use intelligence and sorcerers use charisma',
  'drow elves have superior darkvision',
  'kenku have excellent memory',
  'werewolves are chaotic evil',
  'homunculi are loyal servants',
  'halflings are very lucky creatures',
];

function getNewSentence(): void {
  if (!$textBox) throw new Error('$textBox query failed');

  const randInt = Math.floor(Math.random() * typeSentences.length);
  currentSentence = typeSentences[randInt];

  while ($textBox.firstChild) {
    $textBox.removeChild($textBox.lastChild as Node);
  }

  const $nullSpan = document.createElement('span');
  $nullSpan.id = 'null-span';
  $textBox.appendChild($nullSpan);

  for (let i = 0; i < currentSentence.length; i++) {
    const $letterSpan = document.createElement('span');
    $letterSpan.textContent = currentSentence[i];
    $letterSpan.id = 'letter' + String(i);
    $letterSpan.className = 'untyped';
    $textBox.appendChild($letterSpan);
  }
}

function updateCurrentSpan(): void {
  $currentSpan = document.querySelector(`#letter${currentLetterNum}`);
  if (!$currentSpan)
    throw new Error('$currentSpan query failed at updateCurrentSpan');
  $currentSpan.className = 'current untyped';
}

let currentSentence: string;
let currentLetterNum = 0;

const $textBox = document.querySelector('.textbox');
const $restartButton = document.querySelector('#restart');
const $accuracy = document.querySelector('#accuracy');
let $currentSpan = document.querySelector(`#letter${currentLetterNum}`);

if (!$textBox) throw new Error('$textBox query failed');
if (!$restartButton) throw new Error('$restartButton query failed');
if (!$accuracy) throw new Error('$restartButton query failed');

getNewSentence();
updateCurrentSpan();

let totalKeyPress = 0;
let correctKeyPress = 0;

document.addEventListener('keydown', (event: KeyboardEvent) => {
  if (!$currentSpan)
    throw new Error('$currentSpan query failed at event start');

  const focusLetter = $currentSpan.textContent;

  if (event.key === focusLetter) {
    $currentSpan.className = 'correct';

    currentLetterNum++;

    if (currentLetterNum < currentSentence.length) {
      updateCurrentSpan();
      correctKeyPress++;
    } else {
      $currentSpan = document.querySelector('#null-span');
    }
  } else {
    $currentSpan.className = 'current incorrect';
  }

  if (currentLetterNum === currentSentence.length) {
    $restartButton.className = 'visible';
    console.log('correctKeyPress:', correctKeyPress);
    console.log('totalKeyPress:', totalKeyPress);
    $accuracy.textContent =
      'Accuracy: ' +
      String(Math.floor((correctKeyPress / totalKeyPress) * 100)) +
      '%';
    $accuracy.className = 'visible';
  } else {
    totalKeyPress++;
  }
});

$restartButton.addEventListener('click', () => {
  getNewSentence();
  currentLetterNum = 0;
  correctKeyPress = 0;
  totalKeyPress = 0;
  updateCurrentSpan();
  $restartButton.className = 'hidden';
  $accuracy.className = 'hidden';
});
