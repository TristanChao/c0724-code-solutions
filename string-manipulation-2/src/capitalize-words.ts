/* exported capitalizeWords */
function capitalizeWords(string: string): string {
  let capitalWordsString = '';
  for (let i = 0; i < string.length; i++) {
    if (i === 0 || string[i - 1] === ' ') {
      capitalWordsString += string[i].toUpperCase();
    } else {
      capitalWordsString += string[i].toLowerCase();
    }
  }
  return capitalWordsString;
}
