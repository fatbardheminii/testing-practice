# Testing Practice Project

This project demonstrates the implementation and testing of various JavaScript functions using Jest and Babel.

## Functions Implemented

1. **Capitalize**: A function that capitalizes the first character of a string.
   - `capitalize(string)`

2. **Reverse String**: A function that reverses a given string.
   - `reverseString(string)`

3. **Calculator Object**: An object with basic arithmetic operations.
   - `add(a, b)`
   - `subtract(a, b)`
   - `multiply(a, b)`
   - `divide(a, b)`

4. **Caesar Cipher**: A function that implements the Caesar cipher encryption.
   - `caesarCipher(str, shift)`

5. **Array Analysis**: A function that analyzes an array of numbers.
   - `analyzeArray(arr)`


## Technologies Used

- JavaScript (ES6+)
- Jest (for testing)
- Babel (for transpiling)

## Setup

1. Clone this repository
2. Run `npm install` to install dependencies
3. Run `npm test` to execute the tests

## Running Tests

To run all tests:

```bash
$ npm test
```

To run test for a specific file:

```bash
$ npm test -- tests/caesarCipher.test.js
```