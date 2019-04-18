module.exports = generator => {
  generator.fs.copyTpl(
    generator.templatePath('package.json.tpl'),
    generator.packagesDestination('package.json'),
    {
      name: generator.name,
      capitalizeName: generator.capitalizeName,
      includeRedux: generator.includeRedux,
      includeApiConfig: generator.includeApiConfig,
      includeUIPackage: generator.includeUIPackage,
      useEnzyme: generator.useEnzyme,
    }
  );

  generator.fs.copy(
    generator.templatePath('.babelrc'),
    generator.packagesDestination('.babelrc')
  );

  generator.fs.copy(
    generator.templatePath('.eslintrc.js'),
    generator.packagesDestination('.eslintrc.js')
  );

  generator.fs.copy(
    generator.templatePath('.babelrc'),
    generator.packagesDestination('.babelrc')
  );

  generator.fs.copy(
    generator.templatePath('.gitignore'),
    generator.packagesDestination('.gitignore')
  );

  generator.fs.copy(
    generator.templatePath('.npmignore'),
    generator.packagesDestination('.npmignore')
  );

  generator.fs.copy(
    generator.templatePath('.prettierrc.js'),
    generator.packagesDestination('.prettierrc.js')
  );

  generator.fs.copyTpl(
    generator.templatePath('.flowconfig.tpl'),
    generator.packagesDestination('.flowconfig'),
    { name: generator.name }
  );

  generator.fs.copyTpl(
    generator.templatePath('jest.config.js.tpl'),
    generator.packagesDestination('jest.config.js'),
    {
      name: generator.name,
      useEnzyme: generator.useEnzyme,
    }
  );

  generator.fs.copyTpl(
    generator.templatePath('webpack.config.js.tpl'),
    generator.packagesDestination('webpack.config.js'),
    { name: generator.name, includeRedux: generator.includeRedux }
  );
};
