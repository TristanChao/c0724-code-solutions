'use strict';
/* exported pick */
function pick(source, keys) {
  const pickObject = {};
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] in source && source[keys[i]] !== undefined) {
      pickObject[keys[i]] = source[keys[i]];
    }
  }
  return pickObject;
}
