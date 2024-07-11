'use strict';
/* exported take */
function take(array, count) {
  const takeArray = [];
  for (let i = 0; i < count && i < array.length; i++) {
    takeArray.push(array[i]);
  }
  return takeArray;
}
