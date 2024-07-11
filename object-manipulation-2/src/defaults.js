'use strict';
/* exported defaults */
function defaults(target, source) {
  const targetKeys = [];
  for (const key in target) {
    targetKeys.push(key);
  }
  for (const key in source) {
    if (!targetKeys.includes(key)) {
      target[key] = source[key];
    }
  }
}
