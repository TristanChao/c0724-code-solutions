'use strict';
/* exported chunk */
function chunk(array, size) {
  const chunkArray = [];
  let chunk = [];
  for (let i = 0; i < array.length; i++) {
    if (i % size === 0 && i !== 0) {
      chunkArray.push(chunk);
      chunk = [];
    }
    chunk.push(array[i]);
  }
  if (chunk.length > 0) {
    chunkArray.push(chunk);
  }
  console.log(chunkArray);
  return chunkArray;
}
