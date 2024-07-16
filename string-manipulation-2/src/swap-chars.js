'use strict';
/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  const firstChar = string[firstIndex];
  const secondChar = string[secondIndex];
  let swapString = '';
  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      swapString += secondChar;
    } else if (i === secondIndex) {
      swapString += firstChar;
    } else {
      swapString += string[i];
    }
  }
  return swapString;
}
