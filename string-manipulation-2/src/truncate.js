'use strict';
/* exported truncate */
function truncate(length, string) {
  let truncatedString = '';
  if (string.length >= length) {
    for (let i = 0; i < length; i++) {
      truncatedString += string[i];
    }
  } else {
    truncatedString = string;
  }
  truncatedString += '...';
  return truncatedString;
}
