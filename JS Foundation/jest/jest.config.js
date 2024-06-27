// jest.config.js

module.exports = {
    testEnvironment: 'node', // or 'jsdom' for browser-like environment
    testMatch: [
      '<rootDir>/tests/**/*.test.js', // Matches all test files ending with .test.js in tests/ directory
    ],
    moduleDirectories: ['node_modules', 'src'], // Include src/ directory for module resolution
  };
  