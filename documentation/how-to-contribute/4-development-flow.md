# Development flow

## Start from a clean environment

```bash
  git checkout master
  git pull
  yarn reset --force
  git checkout -b <my_feature_branch>
```

**Why**: Because you know the code you are building upon has been validated and is as stable as possible. Do not start from another branch unless you absolutely need to.

## Open the project

### By packages

- Open the component you want to work in directly in your IDE, example with VSCode:
  ```bash
  cd packages/smartbot
  code .
  ```

### As a whole if needed

- You can also open the entire project to see all available packages
- :warning: If you open all the entire projet, the VSCode flow plugin will not work correctly

## Run your feature

### On Storybook

Every component can be built and visualized locally with [storybook](https://storybook.js.org/) as long as it has a `story` (this should be the case if you used the [provided generators](../development/how-to-create-a-perfect-component-on-cs.md#use-generators-to-quickly-bootstrap-a-standardized-component)).

- Run `yarn storybook`
- In your browser, on the URL: http://localhost:9001/

### On your project, with `yarn link`

Detailed page: [yarn link](./4.1-yarn-link.md)

## Launch the tests

- Run `yarn test` from the package(s) you modified.

It will check all packages unit tests (Jest), typing (Flow) and linting (EsLint and Prettier)

You can also run `yarn test` from the project root folder, it will automatically run the tests in all modified packages (but the logs are a bit harder to read in case of an error).

If you encounter a `React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: undefined.` don't forget to run `yarn build:watch` or `yarn build:development` because the Jest tests for example use the `build.development.js` of the dependencies, not the sources!
