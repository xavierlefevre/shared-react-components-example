module.exports = {
  cacheDirectory: '<rootDir>/jest/tmp',
  moduleNameMapper: {
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>../../tools-configuration/mocks/image.js',
    '\\.(css|less)$': '<rootDir>../../tools-configuration/mocks/styleMock.js',
    '@shared-components(.*)': '<rootDir>..$1',
  },
  setupFiles: ['jest-canvas-mock'],
  setupTestFrameworkScriptFile:
    '<rootDir>../../tools-configuration/test-bundler.js',
  testURL: 'http://localhost/',
};
