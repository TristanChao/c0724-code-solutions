/* exported findIndex */
function findIndex(array: unknown[], value: unknown): number {
  let valueIndex = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      valueIndex = i;
      break;
    }
  }
  return valueIndex;
}
