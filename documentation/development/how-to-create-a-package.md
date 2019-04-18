# How to create a new SharedComponents package

:warning: Please discuss with the SharedComponents team before creating a new package

![https://raw.githubusercontent.com/yeoman/media/master/optimized/yeoman-masthead.png](https://raw.githubusercontent.com/yeoman/media/master/optimized/yeoman-masthead.png)

:warning: Please ensure that you have storybook shutdown before next steps

:warning: Please ensure you have run `nvm use` before you start

Execute this command and follow instructions:

```bash
# You'll be asked for a package name in kebab case
# --force is to override flow-configurations
yarn generate:package
```

Then you need to add your package name in the following files:

- `.circleci/config.yml` in the cache saved paths
- `.storybook/config.js`, add those two lines:
  ```bash
  req = require.context(`../packages/{YOUR_PACKAGE_NAME}/src`, true, /.stories.js$/);
  importAll(req);
  ```

Finally, change the port of the watch server in webpack.config.js (watcherConfiguration)

:warning: Set it to a unused port, check all other packages

```
const watcherConfiguration = {
  //...
  devServer: {
    //...
    port: 9005,
  },
};
```

## Troubleshooting

### `yarn` error

```
# When running yarn
error An unexpected error occurred: "ENOENT: no such file or directory

# Fix : clean cache
yarn cache clean

# Optional : update your yarn version
npm uninstall yarn -g
npm install yarn -g
```

### `yarn start` error

```
# When running `yarn start` in your new package
<span style="color:red">Invalid configuration object. Webpack has been initialised using a configuration object that does not match the API schema.</span>

# Fix : update your yarn version
nvm use
npm uninstall yarn -g
npm install yarn -g
```

### Trouble shooting problems after renaming a package

```
# When running tests in a package you just renamed, if you got an error about 'styled-components'

# Fix : reinstall the package (it will create symlinks in node_modules for dependencies)
yarn (in root folder of shared-components)
```

## Next steps

**Now follow [development documentation](./development/development.md)**
