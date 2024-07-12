/* exported swapChars */
function swapChars(
  firstIndex: number,
  secondIndex: number,
  string: string
): string {
  const firstChar = string[firstIndex];
  const secondChar = string[secondIndex];
  const stringArray = string.split('');

  stringArray[firstIndex] = secondChar;
  stringArray[secondIndex] = firstChar;

  let swapString = '';
  for (let i = 0; i < stringArray.length; i++) {
    swapString += stringArray[i];
  }

  return swapString;
}
