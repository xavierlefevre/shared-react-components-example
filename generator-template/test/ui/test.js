const path = require('path');
var fs = require('fs-extra');
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');

const testUIName = 'TestUI';

describe('UI Generator', () => {
  before(done => {
    helpers
      .run(path.join(__dirname, '../../generators/ui'))
      .inTmpDir(dir => {
        // Some files (UI Templates for example) are outside of the generator-template/generators/ui folder,
        // but the mocked generator ran during the test can only access files inside this folder.
        // The files outside this folder thus first need to be copied into the mocked generator folder, so that the mocked generator can assess them.
        fs.copySync(
          path.join(
            __dirname,
            '../../../packages/ui/src/components/UITemplate'
          ),
          path.join(dir, 'packages/ui/src/components/UITemplate')
        );

        fs.copySync(
          path.join(
            __dirname,
            '../../../packages/ui/src/__snapshots__/index.json'
          ),
          path.join(dir, 'packages/ui/src/__snapshots__/index.json')
        );
      })
      .withPrompts({ name: testUIName })
      .withOptions({ 'skip-end-steps': true })
      .on('end', done);
  });

  it('can be required without throwing', () => {
    require('../../generators/package');
  });

  it('creates expected files', () => {
    assert.file([
      'component.js',
      'theme.js',
      'style.js',
      'index.js',
      'test.js',
      'stories.js',
      `../../../flow-typed/PackageTypes/PropsTypes/${testUIName}.js`,
    ]);
  });

  it('adds the new UI to the list of exported UIs', () => {
    assert.fileContent('../../__snapshots__/index.json', testUIName);
  });
});
