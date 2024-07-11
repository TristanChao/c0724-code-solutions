/* exported takeRight */
function takeRight(array: unknown[], count: number): unknown[] {
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
