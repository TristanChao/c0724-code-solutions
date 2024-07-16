/* exported capitalizeWord */
function capitalizeWord(word: string): string {
  let capitalizedWord = '';
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  } else {
    for (let i = 0; i < word.length; i++) {
      if (i === 0) {
        capitalizedWord += word[i].toUpperCase();
      } else {
        capitalizedWord += word[i].toLowerCase();
      }
    }
    return capitalizedWord;
  }
}
