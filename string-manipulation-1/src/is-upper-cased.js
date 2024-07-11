'use strict';
/* exported isUpperCased */
function isUpperCased(word) {
  const capitalWord = word.toUpperCase();
  if (word === capitalWord) {
    return true;
  } else {
    return false;
  }
}
