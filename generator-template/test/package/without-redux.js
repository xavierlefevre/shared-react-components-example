const path = require('path');
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');

describe('Without Redux option', () => {
  before(done => {
    helpers
      .run(path.join(__dirname, '../../generators/package'))
      .withOptions({ 'change-webpack-storybook': false })
      .withPrompts({
        name: 'test-widget',
        redux: false,
        uiPackage: true,
        apiConfig: true,
      })
      .withGenerators([[helpers.createDummyGenerator(), 'mocha:app']])
      .on('end', done);
  });

  it('the generator can be required without throwing', () => {
    require('../../generators/package');
  });

  it('Creates expected files', () => {
    assert.file([
      'packages/test-widget/webpack.config.js',
      'packages/test-widget/README.md',
      'packages/test-widget/package.json',
      'packages/test-widget/jest.config.js',
      'packages/test-widget/.prettierrc.js',
      'packages/test-widget/.npmignore',
      'packages/test-widget/.gitignore',
      'packages/test-widget/.flowconfig',
      'packages/test-widget/.eslintrc.js',
      'packages/test-widget/.babelrc',
      'packages/test-widget/src/index.js',
      'packages/test-widget/src/components/index.js',
      'packages/test-widget/src/components/TestWidget/index.js',
      'packages/test-widget/src/components/TestWidget/TestWidget.test.js',
      'packages/test-widget/src/components/TestWidget/TestWidget.style.js',
      'packages/test-widget/src/components/TestWidget/TestWidget.stories.js',
      'packages/test-widget/src/components/TestWidget/TestWidget.component.js',
      'packages/test-widget/build/index.js',
    ]);
  });
});
