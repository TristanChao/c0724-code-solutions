/* exported isLowerCased */
function isLowerCased(word: string): boolean {
  const lowerWord = word.toLowerCase();
  if (word === lowerWord) {
    return true;
  } else {
    return false;
  }
}
