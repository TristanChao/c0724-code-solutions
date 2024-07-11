/* exported toObject */
function toObject(keyValuePair: [keyof object, unknown]): object {
  const newObject: Record<string, unknown> = {};
  const newKey = keyValuePair[0];
  newObject[newKey] = keyValuePair[1];
  return newObject;
}
