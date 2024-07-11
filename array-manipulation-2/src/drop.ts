/* exported drop */
function drop(array: unknown[], count: number): unknown[] {
  const dropArray = [];
  for (let i = count; i < array.length; i++) {
    dropArray.push(array[i]);
  }
  return dropArray;
}
