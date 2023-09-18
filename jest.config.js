module.exports = {
  testEnvironment: 'node',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.js$',
  collectCoverage: true,
  coverageReporters: ['lcov', 'text-summary'],
  reporters: [
    'default',
    ['jest-sonar', { outputDirectory: 'coverage', outputName: 'test-reporter.xml' }]
  ]
};
