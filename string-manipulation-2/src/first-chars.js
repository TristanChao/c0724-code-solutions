'use strict';
/* exported firstChars */
function firstChars(length, string) {
  let firstStr = '';
  for (let i = 0; i < length && i < string.length; i++) {
    firstStr += string[i];
  }
  return firstStr;
}
