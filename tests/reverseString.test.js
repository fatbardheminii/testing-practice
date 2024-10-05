import { reverseString } from "../scripts/reverseString.js";

describe("reverseString", () => {
    test("reverses a simple string", () => {
        expect(reverseString('hello')).toBe('olleh');
        expect(reverseString("world")).toBe("dlrow");
    });

    test("reverses a string with empty spaces", () => {
        expect(reverseString("hello world")).toBe("dlrow olleh");
    });

    test('handles empty string', () => {
        expect(reverseString('')).toBe('');
    });
    
    test("handles string with numbers and special characters", () => {
      expect(reverseString("abc123!@#")).toBe("#@!321cba");
    });

    test("handles non-string inputs", () => {
      expect(reverseString(null)).toBe("");
      expect(reverseString(undefined)).toBe("");
      expect(reverseString(123)).toBe("");
    });
})