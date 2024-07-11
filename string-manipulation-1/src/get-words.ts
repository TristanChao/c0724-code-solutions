/* exported getWords */
function getWords(string: string): string[] {
  if (string.length === 0) {
    return [];
  }
  const wordsArray = string.split(' ');
  return wordsArray;
}
