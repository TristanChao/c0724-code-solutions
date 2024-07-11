/* exported chunk */
function chunk(array: unknown[], size: number): unknown[] {
  const chunkArray = [];
  let chunk: unknown[] = [];
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
