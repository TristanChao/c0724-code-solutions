const heroes = ['Dr. Strange', 'Spiderman', 'Iron Man', 'Scarlet Witch'];
let randomNumber = Math.random();
randomNumber *= heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
const randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

const library = [
  { title: 'Six of Crows', author: 'Leigh Bardugo' },
  { title: 'The Ballad of Songbirds and Snakes', author: 'Suzanne Collins' },
  { title: 'A Trick of Light', author: 'Stan Lee' },
];
const lastBook = library.pop();
console.log('lastBook:', lastBook);
const firstBook = library.shift();
console.log('firstBook:', firstBook);
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

const fullName = 'Tristan Chao';
const firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);

const employee = {
  name: 'Joe',
  age: 1000,
  position: 'secretary',
};
const employeeKeys = Object.keys(employee);
console.log('employeeKeys', employeeKeys);
const employeeValues = Object.values(employee);
console.log('employeeValues:', employeeValues);
const employeePairs = Object.entries(employee);
console.log('employeePairs:', employeePairs);
