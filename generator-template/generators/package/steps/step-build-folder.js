module.exports = generator => {
  generator.fs.copy(
    generator.templatePath('build/index.js'),
    generator.packagesDestination('build/index.js')
  );
};
