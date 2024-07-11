/* exported isUpperCased */
function isUpperCased(word: string): boolean {
  const capitalWord = word.toUpperCase();
  if (word === capitalWord) {
    return true;
  } else {
    return false;
  }
}
