const rootConf = require('../../tools-configuration/jest.config.js');

module.exports = Object.assign({}, rootConf, {
  moduleNameMapper: {
    ...rootConf.moduleNameMapper,
    '^shared-components-<%= name %>/(.*)$': '<rootDir>/src/$1',
  },
  <%_if (useEnzyme) { -%>
  setupTestFrameworkScriptFile: './test-bundler.js',
  <%_ } -%>
});
