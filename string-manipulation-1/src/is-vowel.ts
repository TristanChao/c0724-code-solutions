/* exported isVowel */
function isVowel(char: string): boolean {
  switch (char) {
    case 'a':
    case 'A':
    case 'e':
    case 'E':
    case 'i':
    case 'I':
    case 'o':
    case 'O':
    case 'u':
    case 'U':
      return true;
    default:
      return false;
  }
}
