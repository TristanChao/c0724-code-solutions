'use strict';
/* exported invert */
function invert(source) {
  const invertedObject = {};
  for (const key in source) {
    invertedObject[String(source[key])] = key;
  }
  return invertedObject;
}
