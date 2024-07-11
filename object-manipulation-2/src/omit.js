'use strict';
/* exported omit */
function omit(source, keys) {
  const omitObject = {};
  for (const key in source) {
    if (!keys.includes(key)) {
      omitObject[key] = source[key];
    }
  }
  return omitObject;
}
