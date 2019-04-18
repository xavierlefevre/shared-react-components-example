const Generator = require('yeoman-generator');
const yosay = require('yosay');
const _s = require('underscore.string');
const fs = require('fs');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.option('skip-end-steps', {
      desc:
        'Skip the end steps. Meant for the tests only, since steps such as running Jest and Prettier are not handled well during the tests',
      type: Boolean,
      defaults: false,
      hide: true,
    });
  }

  prompting() {
    this.log(
      yosay(
        "'Allo 'allo! Welcome to the Shared Components generator, I will build for you a new UI"
      )
    );

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'What is the UI name? (in PascalCase e.g: "LinkButton")',
      },
    ];

    return this.prompt(prompts).then(answers => {
      this.pascalCaseName = answers.name;
      this.camelCaseName = _s.decapitalize(this.pascalCaseName);
    });
  }

  _addEntryInExportedUIs() {
    this.log(`Adding ${this.pascalCaseName} to the list of exported UIs...`);

    const exportedUIsPath = this.destinationPath(
      `../../__snapshots__/index.json`
    );
    let exportedUIs = JSON.parse(fs.readFileSync(exportedUIsPath));

    exportedUIs.push(this.pascalCaseName);
    fs.writeFileSync(exportedUIsPath, JSON.stringify(exportedUIs, null, 2));
  }

  writing() {
    const uiComponentsPath = 'packages/ui/src/components';
    this.sourceRoot(`${uiComponentsPath}/UITemplate`);
    this.destinationRoot(`${uiComponentsPath}/${this.pascalCaseName}`);

    this.fs.copyTpl(
      this.templatePath('theme.js.tpl'),
      this.destinationPath('theme.js')
    );

    this.fs.copyTpl(
      this.templatePath('style.js.tpl'),
      this.destinationPath('style.js'),
      { camelCaseName: this.camelCaseName }
    );

    this.fs.copyTpl(
      this.templatePath('flow-typed.js.tpl'),
      this.destinationPath(
        `../../../flow-typed/PackageTypes/PropsTypes/${this.pascalCaseName}.js`
      ),
      { pascalCaseName: this.pascalCaseName }
    );

    this.fs.copyTpl(
      this.templatePath('component.js.tpl'),
      this.destinationPath('component.js'),
      { pascalCaseName: this.pascalCaseName }
    );

    this.fs.copyTpl(
      this.templatePath('index.js.tpl'),
      this.destinationPath('index.js')
    );

    this.fs.copyTpl(
      this.templatePath('test.js.tpl'),
      this.destinationPath('test.js'),
      { pascalCaseName: this.pascalCaseName, camelCaseName: this.camelCaseName }
    );

    this.fs.copyTpl(
      this.templatePath('stories.js.tpl'),
      this.destinationPath('stories.js'),
      { pascalCaseName: this.pascalCaseName, camelCaseName: this.camelCaseName }
    );

    this._addEntryInExportedUIs();
  }

  _runTest() {
    this.log('Running tests...');
    this.spawnCommandSync('yarn', ['test:jest', `/${this.pascalCaseName}/`]);
  }

  _runPrettier() {
    this.log('Running prettier...');
    this.spawnCommandSync('yarn', [
      'prettier',
      '--write',
      `**/${this.pascalCaseName}/*.js`,
    ]);
  }

  _logManualSteps() {
    this.log(
      '\n\n---------> ALMOST FINISHED, ONE LAST STEP <---------\nYou must insert the following flow-typed export in "packages/ui/flow-typed/PackageTypes/ui_vx.x.x.js", in "declare module \'@shared-components/atoms\'":\n'
    );
    this.log(
      `declare export var ${this.pascalCaseName}: Class<React$Component<${
        this.pascalCaseName
      }PropsType>>;\n`
    );
  }

  end() {
    if (!this.options['skip-end-steps']) {
      this._runTest();
      this._runPrettier();
      this._logManualSteps();
    }
  }
};
