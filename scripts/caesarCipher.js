export const caesarCipher = (str, shift) => {
  if (typeof str !== "string" || typeof shift !== "number") {
    return null;
  }

  const shiftInRange = ((shift % 26) + 26) % 26; // Ensure shift is always positive and in range 0-25

  return str
    .split("")
    .map((char) => {
      if (char.match(/[a-z]/i)) {
        const code = char.charCodeAt(0);
        const isUpperCase = code >= 65 && code <= 90;
        const base = isUpperCase ? 65 : 97;
        return String.fromCharCode(((code - base + shiftInRange) % 26) + base);
      }
      return char;
    })
    .join("");
};
