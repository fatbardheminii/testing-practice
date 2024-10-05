import { analyzeArray } from "../scripts/analyzeArray";

describe("analyzeArray", () => {
  test("analyzes an array of numbers correctly", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  test("handles an array with negative numbers", () => {
    expect(analyzeArray([-1, -8, 3, 4, -2, 6])).toEqual({
      average: 0.33,
      min: -8,
      max: 6,
      length: 6,
    });
  });

  test("handles an array with decimal numbers", () => {
    expect(analyzeArray([1.5, 2.3, 4.7, 3.1])).toEqual({
      average: 2.9,
      min: 1.5,
      max: 4.7,
      length: 4,
    });
  });

  test("returns null for an empty array", () => {
    expect(analyzeArray([])).toBeNull();
  });

  test("returns null for a non-array input", () => {
    expect(analyzeArray("not an array")).toBeNull();
    expect(analyzeArray(123)).toBeNull();
    expect(analyzeArray({ key: "value" })).toBeNull();
  });

  test("returns null for an array with non-number elements", () => {
    expect(analyzeArray([1, 2, "three", 4])).toBeNull();
  });
});
