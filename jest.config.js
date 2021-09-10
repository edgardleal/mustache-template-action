// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  roots: ['<rootDir>'],
  testMatch: [
    '<rootDir>/src/**/__tests__/*.{spec,test}.{ts,tsx,js,jsx}',
  ],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx,js,jsx}',
    'index.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 4,
      functions: 7,
      lines: 4,
      statements: 6,
    },
  },
  clearMocks: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '/build/',
  ],
};
