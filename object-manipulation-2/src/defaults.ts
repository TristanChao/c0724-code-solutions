/* exported defaults */
function defaults(
  target: Record<string, unknown>,
  source: Record<string, unknown>
): undefined {
  for (const key in source) {
    if (target[key] === undefined) {
      target[key] = source[key];
    }
  }
}
