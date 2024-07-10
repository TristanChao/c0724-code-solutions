/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
function isUnderFive(number: number): boolean {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

function isEven(number: number): boolean {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function startsWithJ(string: string): boolean {
  if (string[0] === 'J' || string[0] === 'j') {
    return true;
  } else {
    return false;
  }
}

interface Person {
  name: string;
  age: number;
}

function isOldEnoughToDrink(person: Person): boolean {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrive(person: Person): boolean {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person: Person): boolean {
  if (person.age > 0) {
    return false;
  } else {
    return false;
  }
}

function categorizeAcidity(pH: number): string {
  if (pH >= 0 && pH < 7) {
    return 'acid';
  } else if (pH >= 7 && pH <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name: string): string {
  switch (name) {
    case 'yakko':
    case 'wakko':
      return "We're the warner brothers!";
    case 'dot':
      return "I'm cute~";
    default:
      return 'Goodnight everybody!';
  }
}

function recommendMovie(genre: string): string {
  switch (genre) {
    case 'action':
      return 'Die Hard';
    case 'comedy':
      return 'The Princess Bride';
    case 'horror':
      return "idk i don't watch horror movies";
    case 'drama':
      return "tbh don't have one for this either";
    case 'musical':
      return 'Moana';
    case 'sci-fi':
      return 'Men in Black';
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi.';
  }
}
