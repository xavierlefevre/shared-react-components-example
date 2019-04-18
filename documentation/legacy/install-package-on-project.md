# Develop with, Add or Update a SharedComponents package on my host project

Summary:

- [Develop with, Add or Update a SharedComponents package on my host project](#develop-with-add-or-update-a-cs-package-on-my-host-project)
  - [Setup and requirements](#setup-and-requirements)
    - [Automate registry Installation](#automate-registry-installation)
  - [Upgrade a package](#upgrade-a-package)
    - [If you use Webpack DLLPlugin](#if-you-use-webpack-dllplugin)

## Setup and requirements

In order to use Shared Components, you will need to prepare your project in the following way:

### Automate registry Installation

To be able to install the project in one command
[standard](https://m33.gitbook.io/standards/technical-gesture/how-to-document-an-installation), you can use a Makefile.

Example:

```Makefile
.PHONY: install
install: check-dependencies
	@npm whoami --registry={your verdaccio url} > /dev/null 2>&1 || npm login --registry={your verdaccio url} --scope=@shared-components && npm config set always-auth true
	@yarn

.PHONY: check-dependencies
check-dependencies:
	@yarn --version > /dev/null 2>&1 || (echo -e 'yarn is not installed\n' && exit 42)
	@npm --version > /dev/null 2>&1 || (echo -e 'npm is not installed\n' && exit 42)
```

Once the Makefile added, you can update your installation documentation to launch installation by running `make`.
Credentials will be required when running this Makefile if the user is not authenticated to the verdaccio registry.
Warn developers of this.

## Upgrade a package

:warning: Please ensure you have unlink packages before you start : `yarn unlink @shared-components/<package-name>`
If you have flow errors with tapas packages, it is due to flow servers still running and you must kill those servers : `ps -ef | grep flow | grep -v grep | awk '{print $2}' | xargs kill -9`

You need to login with `npm login` and then:

```bash
yarn add @shared-components/<package-name>
```

You don't need to update the dependencies of the package you want to upgrade, even if it has been bumped as well.
Example: if a new version of the fundsheet package uses a new version of package UI, it is not necessary to upgrade UI on Digital Clubs. The UI version used by fundsheet is already installed with the `yarn upgrade` command you made for fundsheet package, in its node modules.

### If you use Webpack DLLPlugin

:warning: If you use [DllPlugin](https://webpack.js.org/plugins/dll-plugin/)

- This is for example the case if you started from [React Boilerplate](https://github.com/react-boilerplate/react-boilerplate)

- You will need to build the dll each time you upgrade a package. With React Boilerplate, you can do it by running `yarn build:dll`.

- In order to make packages using `APP_ENV` variables work, you need to also define the variable in the dll build. With React Boilerplate:

```json
{
  "build:dll": "cross-env APP_ENV=development node ./internals/scripts/dependencies.js"
}
```

- You can also decide to exclude the new Tapas package from the DllPlugin so you won't have to run `yarn build:dll` after each upgrade, but your `yarn start` may take more time:

```json
// package.json
{
  "dllPlugin": {
    "exclude": ["@shared-components/<package-name>"]
  }
}
```
