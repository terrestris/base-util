module.exports = {
  moduleFileExtensions: [
    'js',
    'ts'
  ],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.(j|t)s?(x)',
    '<rootDir>/src/**/?(*.)(spec|test).(j|t)s?(x)'
  ],
  testEnvironment: 'jsdom',
  moduleDirectories: [
    'node_modules'
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(ol)/)'
  ],
  transform: {
    '^.+\\.jsx?$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.ts?$': 'ts-jest'
  },
  setupFilesAfterEnv: [
    '<rootDir>/jest/setup.js'
  ],
  collectCoverageFrom: [
    'src/**/*.ts'
  ],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.prod.json'
    }
  }
};
