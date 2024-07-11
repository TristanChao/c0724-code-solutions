/* exported compact */
// The function should remove all falsey values from `array`
// Falsey values include false, null, NaN, 0, -0, empty strings, and undefined
// The new array should maintain the order of truthy elements from `array`

// Function named compact, with one parameter 'array' of type unknown[]
// Create a new array
// Use a for loop to iterate through elements in `array`
// Use an if statement checking for truthy values, and push those to the new array
// Return the new array

function compact(array: unknown[]): unknown[] {
  const compactArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      compactArray.push(array[i]);
    }
  }
  return compactArray;
}
