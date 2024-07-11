/* exported chunk */
function chunk(array: unknown[], size: number): unknown[] {
  const chunkArray = [];
  let chunk = [];
  const mostChunks = Math.floor(array.length / size);
  for (let i = 0; i < mostChunks * size; i += size) {
    chunk = [];
    for (let y = 0; y < size; y++) {
      chunk.push(array[i + y]);
    }
    chunkArray.push(chunk);
  }
  const remaining = array.length % size;
  console.log(remaining);
  if (remaining !== 0) {
    chunk = [];
    for (let r = array.length - remaining; r < array.length; r++) {
      chunk.push(array[r]);
    }
    chunkArray.push(chunk);
  }
  console.log(chunkArray);
  return chunkArray;
}
