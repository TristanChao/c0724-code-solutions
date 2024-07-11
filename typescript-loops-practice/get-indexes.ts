/* exported getIndexes */
function getIndexes(array: unknown[]): number[] {
  const indexesArr = [];
  for (let i = 0; i < array.length; i++) {
    indexesArr.push(i);
  }
  return indexesArr;
}
