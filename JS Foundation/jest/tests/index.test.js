// tests/index.test.js

const { someFunction } = require('../src/index');

test('someFunction should return expected value', () => {
  const result = someFunction(); // Call the function from index.js

  // Add assertions to verify the result
  expect(result).toBe(expectedValue); // Replace 'expectedValue' with your actual expected value
});
