/* exported setValue */
function setValue(
  object: Record<string, unknown>,
  key: keyof object,
  value: unknown
): undefined {
  object[key] = value;
}
