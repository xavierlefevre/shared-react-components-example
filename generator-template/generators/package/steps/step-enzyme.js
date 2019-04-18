module.exports = generator => {
  generator.fs.copy(
    generator.templatePath('test-bundler.js.tpl'),
    generator.packagesDestination('test-bundler.js')
  );
};
