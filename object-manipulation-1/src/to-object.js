'use strict';
/* exported toObject */
function toObject(keyValuePair) {
  const newObject = {};
  const newKey = keyValuePair[0];
  newObject[newKey] = keyValuePair[1];
  return newObject;
}
