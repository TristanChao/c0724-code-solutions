'use strict';
/* exported countdown */
function countdown(num) {
  const numArray = [];
  for (let i = num; i >= 0; i--) {
    numArray.push(i);
  }
  return numArray;
}
