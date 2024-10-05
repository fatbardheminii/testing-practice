export const calculator = {
  add(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      return "Only numbers allowed!";
    }
    return a + b;
  },

  subtract(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      return "Only numbers allowed!";
    }
    return a - b;
  },

  multiply(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      return "Only numbers allowed!";
    }
    return a * b;
  },

  divide(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      return "Only numbers allowed!";
    }
     if (b === 0) {
       return "Cannot divide by zero!";
     }
    return a / b;
  },

  //   export: { add, subtract, multiply, divide },
};
