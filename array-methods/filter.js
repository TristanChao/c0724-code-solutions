'use strict';
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];
const evenNums = numbers.filter((item) => item % 2 === 0);
console.log('evenNums:', evenNums);
const noDNames = names.filter(
  (name) => !name.includes('d') && !name.includes('D')
);
console.log('noDNames:', noDNames);
