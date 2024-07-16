/* exported firstChars */
function firstChars(length: number, string: string): string {
  let firstStr = '';
  for (let i = 0; i < length && i < string.length; i++) {
    firstStr += string[i];
  }
  return firstStr;
}
