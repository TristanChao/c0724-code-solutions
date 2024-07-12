/* exported numVowels */
function numVowels(string: string): number {
  let vowelCount = 0;
  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
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
        vowelCount++;
    }
  }
  return vowelCount;
}
