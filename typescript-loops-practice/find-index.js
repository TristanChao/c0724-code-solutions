'use strict';
/* exported findIndex */
function findIndex(array, value) {
  let valueIndex = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      valueIndex = i;
      break;
    }
  }
  return valueIndex;
}
