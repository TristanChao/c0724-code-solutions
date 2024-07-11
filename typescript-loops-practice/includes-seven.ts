/* exported includesSeven */
function includesSeven(array: unknown[]): boolean {
  let hasSeven = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      hasSeven = true;
    }
  }
  return hasSeven;
}
