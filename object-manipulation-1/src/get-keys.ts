/* exported getKeys */
function getKeys(object: object): string[] {
  const keysArray: string[] = [];
  for (const key in object) {
    keysArray.push(key);
  }
  return keysArray;
}
