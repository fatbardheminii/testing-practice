import { calculator } from "../scripts/calculator.js";

describe("calculator", () => {
  test("add two numbers", () => {
    expect(calculator.add(3, 5)).toBe(8);
  });

  test("adding strings doesn't work", () => {
    expect(calculator.add("3", "a")).toBe("Only numbers allowed!");
  });

  test("subtract two numbers", () => {
    expect(calculator.subtract(5, 2)).toBe(3);
  });

  test("subtracting strings doesn't work", () => {
    expect(calculator.subtract("3", "a")).toBe("Only numbers allowed!");
  });

  test("multiply two numbers", () => {
    expect(calculator.multiply(3, 5)).toBe(15);
  });

  test("multiplying strings doesn't work", () => {
    expect(calculator.multiply("3", "a")).toBe("Only numbers allowed!");
  });

  test("divide two numbers", () => {
    expect(calculator.divide(15, 5)).toBe(3);
  });

  test("dividing strings doesn't work", () => {
    expect(calculator.divide("3", "a")).toBe("Only numbers allowed!");
  });

  test("divide by zero", () => {
    expect(calculator.divide(5, 0)).toBe("Cannot divide by zero!");
  });

  test("divide a positive by a negative number", () => {
    expect(calculator.divide(15, -5)).toBe(-3);
  });
});
