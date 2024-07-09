'use strict';
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log('convertMinutesToSeconds(17):', convertMinutesToSeconds(17));
function greet(name) {
  return 'Hey ' + name + '!';
}
console.log("greet('Tristan'):", greet('Tristan'));
const getArea = (width, height) => width * height;
console.log('getArea(13, 5):', getArea(13, 5));
const getFirstName = (person) => person.firstName;
console.log(
  "getFirstName({ firstName: 'Tristan', lastName: 'Chao' }):",
  getFirstName({ firstName: 'Tristan', lastName: 'Chao' })
);
const getLastElement = (array) => array[array.length - 1];
console.log(
  "getLastElement(['Billy', 'Bob', 'Joe']):",
  getLastElement(['Billy', 'Bob', 'Joe'])
);
function callOtherFunction(otherFunction, params) {
  return otherFunction(params);
}
console.log(
  'callOtherFunction(convertMinutesToSeconds, 34):',
  callOtherFunction(convertMinutesToSeconds, 34)
);
