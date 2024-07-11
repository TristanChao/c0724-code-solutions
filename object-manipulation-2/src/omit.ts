/* exported omit */
function omit(source: Record<string, unknown>, keys: string[]): object {
  const omitObject: Record<string, unknown> = {};
  for (const key in source) {
    if (!keys.includes(key)) {
      omitObject[key] = source[key];
    }
  }
  return omitObject;
}
