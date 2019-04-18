module.exports = generator => {
  generator.fs.copyTpl(
    generator.templatePath('src/index.js.tpl'),
    generator.packagesDestination('src/index.js'),
    {
      capitalizeName: generator.capitalizeName,
    }
  );
};
