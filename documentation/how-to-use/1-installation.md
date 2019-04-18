# Install a Shared Components package on my project

## Download a SharedComponents package

- Set up the access to our private NPM repository

```bash
npm login --registry={verdaccio url} --scope=@shared-components
```

You will need a username, a password and an email:

- username: admin_registry
- email: {email}
- password: wzx\***\*\*\*\*\***jc (ask SharedComponents team for the full password)

Then run:

```bash
npm config set always-auth true
```

You can now install your package with

```bash
yarn add @shared-components/<package-name> -E
```

## Install peer dependencies

SharedComponents packages have peer dependencies that you need to install as `dependencies` on your host project for the SharedComponents package to work. Example of common peer dependencies: react, styled-components, ...  
yarn/npm will warn you of missing/incorrect peer dependencies when executing a `yarn add` or `yarn install`.

These dependencies are listed as peer to make sure that the host project won't be using two different versions of the same library, which for some libraries would be major source of bugs. For more info: https://yarnpkg.com/blog/2018/04/18/dependencies-done-right/

**Example**:

- A SharedComponents package has in its `peerDependencies`: `"styled-components": "^4.0.0"`
- Your host project has in its `dependencies`: `"styled-components": "^3.0.0"`
- To install the SharedComponents package on your host project, you must update `styled-components` on your host project to match the `^4.0.0` semver requirement of the SharedComponents package.
