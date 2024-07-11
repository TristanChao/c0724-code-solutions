'use strict';
/* exported isLowerCased */
function isLowerCased(word) {
  const lowerWord = word.toLowerCase();
  if (word === lowerWord) {
    return true;
  } else {
    return false;
  }
}
