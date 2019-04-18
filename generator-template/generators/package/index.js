const _writingReduxFolder = require('./steps/step-redux.js');
const _writingConfigFile = require('./steps/step-config-files.js');
const _writingComponentsFolder = require('./steps/step-example-files.js');
const _writingIndexFiles = require('./steps/step-index-files.js');
const _writingBuildFolder = require('./steps/step-build-folder.js');
const _writingReadmeMD = require('./steps/step-readme.js');
const _writingTestBundler = require('./steps/step-enzyme.js');

const Generator = require('yeoman-generator');
const _s = require('underscore.string');
const yosay = require('yosay');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.option('skip-install', {
      desc: 'Skip installation of dependencies',
      type: Boolean,
      defaults: false,
    });
  }

  prompting() {
    this.log(
      yosay(
        "'Allo 'allo! Welcome to the Shared Components generator, I will build for you a new package"
      )
    );

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'What is the package name? (kebab-case e.g: smart-search)',
      },
      {
        type: 'confirm',
        name: 'uiPackage',
        message:
          'Would you like to use UI Package? (design guidelines and components)',
      },
      {
        type: 'confirm',
        name: 'redux',
        message: 'Would you like to use Redux to handle API calls? (Redux)',
      },
      {
        type: 'confirm',
        name: 'apiConfig',
        message:
          'Would you like to use the API config? (always updated API routes)',
        when: answers => !answers.redux,
      },
      {
        type: 'confirm',
        name: 'enzyme',
        message: 'Would you like to use enzyme for tests?',
      },
    ];

    return this.prompt(prompts).then(answers => {
      this.name = _s.slugify(answers.name);
      this.capitalizeName = _s(this.name)
        .camelize()
        .capitalize()
        .value();
      this.upperName = this.capitalizeName.toUpperCase();
      this.includeRedux = answers.redux;
      this.includeApiConfig = answers.redux || answers.apiConfig;
      this.includeUIPackage = answers.uiPackage;
      this.useEnzyme = answers.enzyme;
      this.packagesDestination = path =>
        this.destinationPath(`packages/${this.name}/${path}`);
    });
  }

  writing() {
    _writingConfigFile(this);
    _writingReadmeMD(this);
    _writingBuildFolder(this);
    _writingIndexFiles(this);

    if (this.includeRedux) {
      _writingReduxFolder(this);
    }

    if (this.useEnzyme) {
      _writingTestBundler(this);
    }

    _writingComponentsFolder(this);
  }

  install() {
    if (!this.options['skip-install']) {
      this.spawnCommandSync('yarn', ['reset']);
    }
  }

  end() {
    if (!this.options['skip-install']) {
      this.log('Start finalize.sh');
      this.spawnCommandSync(this.templatePath('../flowignore.sh'), [
        '-n',
        this.name,
      ]);

      this.spawnCommandSync(this.templatePath('../finalize.sh'), [
        '-n',
        this.name,
      ]);
    }
  }
};
