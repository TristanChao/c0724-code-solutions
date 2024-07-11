/* exported invert */
function invert(source: Record<string, unknown>): object {
  const invertedObject: Record<string, unknown> = {};
  for (const key in source) {
    invertedObject[String(source[key])] = key;
  }
  return invertedObject;
}
