const rootConf = require('../../tools-configuration/jest.config.js');

module.exports = Object.assign({}, rootConf, {
  moduleNameMapper: {
    ...rootConf.moduleNameMapper,
    '^shared-components-atoms/(.*)$': '<rootDir>/src/$1',
  },
  setupTestFrameworkScriptFile: './test-bundler.js',
});
