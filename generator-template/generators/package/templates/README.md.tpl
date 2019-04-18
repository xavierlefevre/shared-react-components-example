# <%= capitalizeName %> Component

## Installation

See the common [documentation to install a package](../../documentation/install-package-on-project), especially the section about packages which depend on the environments.

## Development

Run 'yarn start' and open http://localhost:9000/

### Peer dependencies

This package has several [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) which need to be installed on your project. Please see the "peer-dependencies" section in package.json

### Main Command Lines

| `yarn <command>` | Description                     |
| ---------------- | ------------------------------- |
| `start`          | webpack-server with watcher.    |
| `build:<env>`    | webpack build.                  |
| `build:watch`    | webpack auto build after changes|
| `build:analyze`  | Analyse your library bundle     |
| `test`           | Run jest and linter tests       |
| `test:lint`      | Run only linter                 |
| `test:jest`      | Run only linter                 |
| `test:ci`        | Only meant to be launch by CI   |
| `test:prettier`  | Check code syntax with prettier |
| `coverage:unit`  | Analyse unit testing coverage   |
| `coverage:flow`  | Analyse flow coverage           |

### Application Structure

The application structure presented in this boilerplate is grouped primarily by file type. Please note, however, that this structure is only meant to serve as a guide, it is by no means prescriptive.

```
.
├── devops                  # Project devops specific settings
├── node_modules            # node_modules handled by Lerna
├── src                     # package source code
│   ├── components          # All your Shared components will be here
│   ├── flow                # Flow Typings of the package
│   ├── style               # Common widget styles
│   ├── redux               # saga / action creators / types / reducer /
│   ├── widgets             # All widgets
│   ├── api.js              # API calls for widgets containers
│   ├── index.watcher.js    # webpack-dev-server entry point
│   ├── index.js            # library entry point
.babelrc
│
.eslintrc.js                # Overrides the default conf from tools-configuration
│
.eslintignore               # Symlinked from tools-configuration, ignored lint files
│
.flowconfig
│
.gitignore
│
.prettierignore             # Symlinked from tools-configuration, ignored prettier files
│
.prettierrc
│
flowcoverage.json           # Symlinked from tools-configuration
│
jest.config.js              # Overrides the default configuration from tools-configuration
│
package.json
│
webpack.config.js           # webpack library building config
│
.vscode                     # Symlinked from root project
```
