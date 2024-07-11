'use strict';
/* exported drop */
function drop(array, count) {
  const dropArray = [];
  for (let i = count; i < array.length; i++) {
    dropArray.push(array[i]);
  }
  return dropArray;
}
