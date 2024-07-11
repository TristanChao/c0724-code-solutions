'use strict';
/* exported takeRight */
function takeRight(array, count) {
  const takeRightArray = [];
  if (count <= array.length) {
    for (let i = array.length - count; i < array.length; i++) {
      takeRightArray.push(array[i]);
    }
    return takeRightArray;
  } else {
    return array;
  }
}
