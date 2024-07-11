'use strict';
/* exported getWords */
function getWords(string) {
  if (string.length === 0) {
    return [];
  }
  const wordsArray = string.split(' ');
  return wordsArray;
}
