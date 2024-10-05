import { caesarCipher } from "../scripts/caesarCipher.js";

describe("caesarCipher", () => {
  test("encrypts a simple string correctly", () => {
    expect(caesarCipher("abcde", 1)).toBe("bcdef");
  });

  test("wraps from z to a", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  test("maintains the same case", () => {
    expect(caesarCipher("AbCdE", 1)).toBe("BcDeF");
  });

  test("handles punctuation and spaces", () => {
    expect(caesarCipher("Hello, World!", 5)).toBe("Mjqqt, Btwqi!");
  });

  test("handles negative shifts", () => {
    expect(caesarCipher("abcde", -1)).toBe("zabcd");
  });

  test("handles large shifts", () => {
    expect(caesarCipher("abc", 27)).toBe("bcd"); // 27 is equivalent to a shift of 1
  });

  test("returns null for non-string input", () => {
    expect(caesarCipher(123, 1)).toBeNull();
  });

  test("returns null for non-number shift", () => {
    expect(caesarCipher("abc", "shift")).toBeNull();
  });

  test("handles empty string", () => {
    expect(caesarCipher("", 5)).toBe("");
  });
});
