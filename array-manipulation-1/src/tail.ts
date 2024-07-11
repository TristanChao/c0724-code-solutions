/* exported tail */
function tail(array: unknown[]): unknown[] {
  const tailArray = [];
  for (let i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  }
  return tailArray;
}
