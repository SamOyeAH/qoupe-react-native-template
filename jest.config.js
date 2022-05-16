module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: ['node_modules/(?!(jest-)?@?react-native)'],
  testMatch: ['<rootDir>/src/**/*.(spec).ts(x)?'],
  setupFilesAfterEnv: ['<rootDir>/src/test/setup-tests.ts'],
  moduleNameMapper: {
    '@hooks/(.*)': '<rootDir>/src/hooks/$1',
  },
};
