module.exports = generator => {
  generator.fs.copyTpl(
    generator.templatePath('src/components/index.js.tpl'),
    generator.packagesDestination('src/components/index.js'),
    { capitalizeName: generator.capitalizeName }
  );

  generator.fs.copyTpl(
    generator.templatePath('src/components/Example/Example.component.js.tpl'),
    generator.packagesDestination(
      `src/components/${generator.capitalizeName}/${
        generator.capitalizeName
      }.component.js`
    ),
    {
      capitalizeName: generator.capitalizeName,
      name: generator.name,
      includeRedux: generator.includeRedux,
    }
  );

  if (generator.includeRedux) {
    generator.fs.copyTpl(
      generator.templatePath('src/components/Example/Example.container.js.tpl'),
      generator.packagesDestination(
        `src/components/${generator.capitalizeName}/${
          generator.capitalizeName
        }.container.js`
      ),
      {
        capitalizeName: generator.capitalizeName,
        includeRedux: generator.includeRedux,
        name: generator.name,
      }
    );
  }

  generator.fs.copyTpl(
    generator.templatePath('src/components/Example/Example.stories.js.tpl'),
    generator.packagesDestination(
      `src/components/${generator.capitalizeName}/${
        generator.capitalizeName
      }.stories.js`
    ),
    {
      capitalizeName: generator.capitalizeName,
      includeRedux: generator.includeRedux,
      name: generator.name,
    }
  );

  generator.fs.copyTpl(
    generator.templatePath('src/components/Example/Example.style.js.tpl'),
    generator.packagesDestination(
      `src/components/${generator.capitalizeName}/${
        generator.capitalizeName
      }.style.js`
    ),
    {
      capitalizeName: generator.capitalizeName,
      name: generator.name,
    }
  );

  generator.fs.copyTpl(
    generator.templatePath('src/components/Example/Example.test.js.tpl'),
    generator.packagesDestination(
      `src/components/${generator.capitalizeName}/${
        generator.capitalizeName
      }.test.js`
    ),
    {
      capitalizeName: generator.capitalizeName,
      includeRedux: generator.includeRedux,
    }
  );

  generator.fs.copyTpl(
    generator.templatePath('src/components/Example/index.js.tpl'),
    generator.packagesDestination(
      `src/components/${generator.capitalizeName}/index.js`
    ),
    {
      capitalizeName: generator.capitalizeName,
      includeRedux: generator.includeRedux,
    }
  );
};
