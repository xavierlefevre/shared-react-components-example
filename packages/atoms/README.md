# UI Components

- Checkbox
- [ExpandableBottomDrawer](#expandable-bottom-drawer)
- Icon

## Installation

See the common [documentation to install a package](../../documentation/install-package-on-project), especially the section about packages which depend on the environments.

### Peer dependencies

This package has several [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) which need to be installed on your project.
Have a look in the `package.json` file to understand which one to install.

## Development

### Main Command Lines

| `make <command>` | Description                     |
| ---------------- | ------------------------------- |
| `build`          | webpack build.                  |
| `test`           | Run jest and linter tests       |
| `test:lint`      | Run only linter                 |
| `test:prettier`  | Check code syntax with prettier |
| `coverage:unit`  | Analyse unit testing coverage   |
| `coverage:flow`  | Analyse flow coverage           |

### Application Structure

The application structure presented in this boilerplate is grouped primarily by file type. Please note, however, that this structure is only meant to serve as a guide. It is by no means prescriptive.

```
.
├── devops                         # Project devops specific settings
├── node_modules                   # node_modules handled by Lerna
├── src                            # package source code
│   ├── components                 # All your React components will be here
│   │   ├── Example.component.js   # Base component, should be dummy
│   │   ├── Example.container.js   # Container, with redux/saga/selector calls
│   │   ├── Example.stories.js     # Story of the component to show on the root storybook
│   │   ├── Example.style.js       # Base component style
│   │   └── Example.test.js        # Jest Snapshot testing
│   ├── flow                       # Flow Typings of the package
│   │   └── api                    # Flow Typings of the APIs response
│   │   └── model                  # Flow typings of your package models
│   │   └── redux                  # Flow typings of the package state
│   ├── redux                      # saga / action creators / types / reducer / middlewares
│   │   └── user.py                # Rest verbs related to the user routes
│   ├── style                      # Shared style between dummy components
.babelrc
│
.eslintrc.js                       # Overrides the default configuration from tools-configuration
.eslintignore                      # Symlinked from tools-configuration, ignored lint files
│
.flowconfig
│
.gitignore
│
.prettierignore                    # Symlinked from tools-configuration, ignored prettier files
│
.prettierrc
│
flowcoverage.json                  # Symlinked from tools-configuration
│
jest.config.js                     # Overrides the default configuration from tools-configuration
│
package.json
│
webpack.config.js
│
.vscode                            # Symlinked from root project
```

## Components

### Expandable Bottom Drawer

**Purpose**: This component is used in the login/signup pages of My Club and SmartbotStandalone

**Example**

```javascript
<ExpandingBottomDrawer>
  <FormattedMessage id="LOGIN_DATA_PROTECTION_TEXT" />
  &nbsp;
  <a
    href="/data-protection"
    style={{
      color: SharedComponentsColors.brandGreen,
    }}
    target="_blank"
  >
    <FormattedMessage id="LOGIN_DATA_PROTECTION_LINK" />
  </a>
  <br />
  <FormattedMessage id="AUTH_SIGN_IN_SIGN_UP_DISCLAIMER_ADVISOR" />
</ExpandingBottomDrawer>
```

![gif of expandable-bottom-drawer](./docs/images/expandable-bottom-drawer.gif)
