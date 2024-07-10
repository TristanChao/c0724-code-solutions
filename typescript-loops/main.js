'use strict';
/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  let numbers = [];
  let currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}
function getEvenNumbersToTwenty() {
  let evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}
function repeatWord(word, times) {
  let count = 1;
  let repeated = '';
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}
function logEachCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}
function doubleAll(numbers) {
  let doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}
function getKeys(obj) {
  let keys = [];
  for (let key in obj) {
    keys.push(key);
  }
  return keys;
}
function getValues(obj) {
  let values = [];
  for (let key in obj) {
    values.push(obj[key]);
  }
  return values;
}
