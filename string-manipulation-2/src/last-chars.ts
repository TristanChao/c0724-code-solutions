/* exported lastChars */
function lastChars(length: number, string: string): string {
  let lastWord = '';
  if (length < string.length) {
    for (let i = string.length - length; i < string.length; i++) {
      lastWord += string[i];
    }
    return lastWord;
  } else {
    return string;
  }
}
