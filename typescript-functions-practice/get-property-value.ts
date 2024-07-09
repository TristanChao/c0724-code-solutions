/* exported getPropertyValue */
function getPropertyValue(object: object, key: keyof object): unknown {
  return object[key];
}
