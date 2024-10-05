export function capitalize(input) {
  if (typeof input !== "string" || input.length === 0) {
    return '';
  }
  return input.charAt(0).toUpperCase() + input.slice(1);
}
