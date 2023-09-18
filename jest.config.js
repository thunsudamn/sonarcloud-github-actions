module.exports = {
  testEnvironment: 'node',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.js$',
  collectCoverage: true,
  coverageReporters: ['lcov', 'text-summary'],
  reporters: [
    'default',
    ['jest-sonar', { outputDirectory: 'coverage', outputName: 'test-reporter.xml' }]
  ],
  coveragePathIgnorePatterns: ['/node_modules/'],
  testResultsProcessor: 'jest-sonar-reporter'
};
