'use strict';
/* exported dropRight */
function dropRight(array, count) {
  const dropRightArray = [];
  for (let i = 0; i < array.length - count; i++) {
    dropRightArray.push(array[i]);
  }
  return dropRightArray;
}
