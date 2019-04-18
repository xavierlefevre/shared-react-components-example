module.exports = generator => {
  // BEGIN Flow for redux
  generator.fs.copyTpl(
    generator.templatePath('src/flow/api/ApiResponseType.js.tpl'),
    generator.packagesDestination(
      `src/flow/api/${generator.capitalizeName}ApiResponseType.js`
    ),
    { capitalizeName: generator.capitalizeName }
  );

  generator.fs.copyTpl(
    generator.templatePath('src/flow/models/ModelType.js.tpl'),
    generator.packagesDestination(
      `src/flow/models/${generator.capitalizeName}ModelType.js`
    ),
    { capitalizeName: generator.capitalizeName }
  );

  generator.fs.copyTpl(
    generator.templatePath('src/flow/redux/StateType.js.tpl'),
    generator.packagesDestination(
      `src/flow/redux/${generator.capitalizeName}StateType.js`
    ),
    { capitalizeName: generator.capitalizeName }
  );
  // END flow for redux

  generator.fs.copy(
    generator.templatePath('src/redux/store.js'),
    generator.packagesDestination('src/redux/store.js')
  );

  generator.fs.copy(
    generator.templatePath('src/redux/storiesDecorator.js'),
    generator.packagesDestination('src/redux/storiesDecorator.js')
  );

  generator.fs.copyTpl(
    generator.templatePath('src/redux/rootReducer.js.tpl'),
    generator.packagesDestination('src/redux/rootReducer.js'),
    { capitalizeName: generator.capitalizeName }
  );

  generator.fs.copyTpl(
    generator.templatePath('src/redux/rootSaga.js.tpl'),
    generator.packagesDestination('src/redux/rootSaga.js'),
    { capitalizeName: generator.capitalizeName }
  );

  generator.fs.copy(
    generator.templatePath('src/redux/Example/actionCreators.js'),
    generator.packagesDestination(
      `src/redux/${generator.capitalizeName}/actionCreators.js`
    )
  );

  generator.fs.copyTpl(
    generator.templatePath('src/redux/Example/actionTypes.js.tpl'),
    generator.packagesDestination(
      `src/redux/${generator.capitalizeName}/actionTypes.js`
    ),
    { upperName: generator.upperName }
  );

  generator.fs.copy(
    generator.templatePath('src/redux/Example/api.js'),
    generator.packagesDestination(
      `src/redux/${generator.capitalizeName}/api.js`
    )
  );

  generator.fs.copy(
    generator.templatePath('src/redux/Example/index.js'),
    generator.packagesDestination(
      `src/redux/${generator.capitalizeName}/index.js`
    )
  );

  generator.fs.copyTpl(
    generator.templatePath('src/redux/Example/modelize.js.tpl'),
    generator.packagesDestination(
      `src/redux/${generator.capitalizeName}/modelize.js`
    ),
    { capitalizeName: generator.capitalizeName }
  );

  generator.fs.copyTpl(
    generator.templatePath('src/redux/Example/reducer.js.tpl'),
    generator.packagesDestination(
      `src/redux/${generator.capitalizeName}/reducer.js`
    ),
    { capitalizeName: generator.capitalizeName }
  );

  generator.fs.copy(
    generator.templatePath('src/redux/Example/reducer.test.js'),
    generator.packagesDestination(
      `src/redux/${generator.capitalizeName}/reducer.test.js`
    )
  );

  generator.fs.copyTpl(
    generator.templatePath('src/redux/Example/sagas.js.tpl'),
    generator.packagesDestination(
      `src/redux/${generator.capitalizeName}/sagas.js`
    ),
    { capitalizeName: generator.capitalizeName }
  );

  generator.fs.copyTpl(
    generator.templatePath('src/redux/Example/selectors.js.tpl'),
    generator.packagesDestination(
      `src/redux/${generator.capitalizeName}/selectors.js`
    ),
    { capitalizeName: generator.capitalizeName }
  );
};
