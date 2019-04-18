module.exports = generator => {
  generator.fs.copyTpl(
    generator.templatePath('README.md.tpl'),
    generator.packagesDestination('README.md'),
    { capitalizeName: generator.capitalizeName }
  );
};
