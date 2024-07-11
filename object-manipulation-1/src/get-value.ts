/* exported getValue */

function getValue(object: object, key: keyof object): unknown {
  return object[key];
}
