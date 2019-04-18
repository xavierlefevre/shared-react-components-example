const rootConf = require('../../tools-configuration/jest.config.js');

module.exports = Object.assign({}, rootConf, {
  moduleNameMapper: {
    ...rootConf.moduleNameMapper,
    '^shared-components-molecules/(.*)$': '<rootDir>/src/$1',
  },
  setupTestFrameworkScriptFile: './test-bundler.js',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testPathIgnorePatterns: ['/node_modules/', '/cypress/'],
});
