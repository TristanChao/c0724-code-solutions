/* exported defaults */
function defaults(
  target: Record<string, unknown>,
  source: Record<string, unknown>
): undefined {
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
