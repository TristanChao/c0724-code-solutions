/* exported pick */
function pick(source: Record<string, unknown>, keys: (keyof object)[]): object {
  const pickObject: Record<string, unknown> = {};
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] in source && source[keys[i]] !== undefined) {
      pickObject[keys[i]] = source[keys[i]];
    }
  }
  return pickObject;
}
