'use strict';
/* exported sumAll */
function sumAll(numbers) {
  let numTotal = 0;
  for (let i = 0; i < numbers.length; i++) {
    numTotal += numbers[i];
  }
  return numTotal;
}
