import type { Config } from 'jest';

/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

const config: Config = {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$' : 'babel-jest'
  },
  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: [
    '/node_modules/'
  ],
  testRegex: '.test.(js|ts)$',
  moduleFileExtensions: [
    'js',
    'mjs',
    'cjs',
    'ts',
    'json',
    'node'
  ],
  // An array of directory names to be searched recursively up from the requiring module's location
  moduleDirectories: [
    'node_modules', 'src'
  ],
  modulePaths: [
    '<rootDir>src'
  ],
  // A list of paths to directories that Jest should use to search for files in
  roots: [
    '../../'
  ],
  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ['<rootDir>setup-tests.ts'],
};

export default config;
