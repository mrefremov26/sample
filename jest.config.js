const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  modulePathIgnorePatterns: ['<rootDir>/cypress/'],
  setupFiles: [`<rootDir>/setupTests.ts`],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/src/tests/mocks/svg.mock.tsx',
    '\\.css': '<rootDir>/src/tests/mocks/style.mock.ts',
    '^@/assets(.*)$': '<rootDir>/src/tests/mocks/file.mock.ts',
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
  },
};
