import { capitalize } from "../scripts/capitalize";

describe("capitalize", () => {
  test("capitalizes the first character of a string", () => {
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("world")).toBe("World");
  });

  test("does not change already capitalized strings", () => {
    expect(capitalize("Hello")).toBe("Hello");
    expect(capitalize("WORLD")).toBe("WORLD");
  });

  test("handles empty string", () => {
    expect(capitalize("")).toBe("");
  });

  test("handles single character strings", () => {
    expect(capitalize("a")).toBe("A");
    expect(capitalize("Z")).toBe("Z");
  });

  test("handles non-string inputs", () => {
    expect(capitalize(null)).toBe("");
    expect(capitalize(undefined)).toBe("");
    expect(capitalize(123)).toBe("");
  });
});