const path = require('path');
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');

describe('With Redux option', () => {
  before(done => {
    helpers
      .run(path.join(__dirname, '../../generators/package'))
      .withOptions({ 'change-webpack-storybook': false })
      .withPrompts({ name: 'test-widget', redux: true, uiPackage: true })
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
      'packages/test-widget/src/components/TestWidget/TestWidget.container.js',
      'packages/test-widget/src/components/TestWidget/TestWidget.component.js',
      'packages/test-widget/src/flow/api/TestWidgetApiResponseType.js',
      'packages/test-widget/src/flow/models/TestWidgetModelType.js',
      'packages/test-widget/src/flow/redux/TestWidgetStateType.js',
      'packages/test-widget/src/redux/rootReducer.js',
      'packages/test-widget/src/redux/rootSaga.js',
      'packages/test-widget/src/redux/store.js',
      'packages/test-widget/src/redux/storiesDecorator.js',
      'packages/test-widget/src/redux/TestWidget/actionCreators.js',
      'packages/test-widget/src/redux/TestWidget/actionTypes.js',
      'packages/test-widget/src/redux/TestWidget/api.js',
      'packages/test-widget/src/redux/TestWidget/index.js',
      'packages/test-widget/src/redux/TestWidget/modelize.js',
      'packages/test-widget/src/redux/TestWidget/reducer.js',
      'packages/test-widget/src/redux/TestWidget/reducer.test.js',
      'packages/test-widget/src/redux/TestWidget/sagas.js',
      'packages/test-widget/src/redux/TestWidget/selectors.js',
      'packages/test-widget/build/index.js',
    ]);
  });
});
