/* exported take */
function take(array: unknown[], count: number): unknown[] {
  const takeArray = [];
  for (let i = 0; i < count && i < array.length; i++) {
    takeArray.push(array[i]);
  }
  return takeArray;
}
