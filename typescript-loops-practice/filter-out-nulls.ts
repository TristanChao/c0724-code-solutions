/* exported filterOutNulls */
function filterOutNulls(values: unknown[]): unknown[] {
  const noNulls = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      noNulls.push(values[i]);
    }
  }
  return noNulls;
}
