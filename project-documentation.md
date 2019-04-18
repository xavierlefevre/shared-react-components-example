# [SharedComponents] Shared Components - ReactJS shared components

> CircleCI Master: [![CircleCI](https://circleci.com/gh/shared-components/shared-components/tree/master.svg?style=svg&circle-token=a73d431bf89cfa0e9aa304d60da7d839e40fd8bc)](https://circleci.com/gh/shared-components/shared-components/tree/master)

## Presentation

This project is a javascript mono-repository using lerna and yarn workspaces.
All packages share:

- a common architecture dictated by the template package
- a common configuration and tooling (Eslint, prettier, flow, jest) that if necessary can be locally overriden or enhanced in each of the package

Take a LIVE look at the components: To do

## How to use SharedComponents on my project

1. [Installation](documentation/how-to-use/1-installation.md)
   1. [Download a package](documentation/how-to-use/1-installation.md#download-a-cs-package)
   2. [Install peer dependencies](documentation/how-to-use/1-installation.md#install-peer-dependencies)
2. [Use a SharedComponents component in my project](documentation/how-to-use/2-use-a-component.md)
   1. [Setup and requirements](documentation/how-to-use/2-use-a-component.md#setup-and-requirements)
      1. [Polyfills](documentation/how-to-use/2-use-a-component.md#set-up-the-required-polyfills)
      2. [Handle Numbro with webpack](documentation/how-to-use/2-use-a-component.md#add-a-custom-loader-for-numbro-when-using-webpack)
      3. [Set up the APP_ENV variable](documentation/how-to-use/2-use-a-component.md#set-up-the-appenv-environment-variable)
   2. [Use a component in your app [To improve]](documentation/how-to-use/2-use-a-component.md#use-a-component-in-your-app)
   3. [Use fonts ans icons](documentation/how-to-use/2-use-a-component.md#use-fonts-and-icons)
   4. [Check your component are well used with Flow](documentation/how-to-use/2-use-a-component.md#use-flow-types-exported-from-a-SharedComponents-package)
3. [Configure your CI](documentation/how-to-use/3-ci-configuration.md)

## How to contribute to SharedComponents

1. [⚠️ Should I contribute to SharedComponents ? ⚠️](documentation/how-to-contribute/1-decision-making.md)
   1. [How to decide](documentation/how-to-contribute/1-decision-making.md#how-to-decide)
   2. [Migration standards](documentation/how-to-contribute/1-decision-making.md#migration-standards)
   3. [Development on SharedComponents is complex hence costly](documentation/how-to-contribute/1-decision-making.md#development-on-cs-is-complex-hence-costly)
2. [Getting started](documentation/how-to-contribute/2-getting-started.md)
   1. [Prerequisite](documentation/how-to-contribute/2-getting-started.md#prerequisite)
   2. [Install the project](documentation/how-to-contribute/2-getting-started.md#install-the-project)
   3. [Launch Storybook](documentation/how-to-contribute/2-getting-started.md#launch-storybook)
3. [Recommended environment setup](documentation/how-to-contribute/3-recommended-setup.md)
   1. [VSCode Plugins](documentation/how-to-contribute/3-recommended-setup.md#vs-code-plugins)
   2. [Pretty Pull Request](documentation/how-to-contribute/3-recommended-setup.md#pretty-pull-request)
4. [Development flow](documentation/how-to-contribute/4-development-flow.md)
   1. [Start from a clean environment](documentation/how-to-contribute/4-development-flow.md#start-from-a-clean-environment)
   2. [Open the project](documentation/how-to-contribute/4-development-flow.md#open-the-project)
   3. [Run your feature locally](documentation/how-to-contribute/4-development-flow.md#run-your-feature)
      1. [On Storybook](documentation/how-to-contribute/4-development-flow.md#on-storybook)
      2. [On your project, with `yarn link`](documentation/how-to-contribute/4.1-yarn-link.md)
   4. Development guides
      1. [How to make a perfect new component](documentation/development/how-to-create-a-perfect-component-on-cs.md)
      2. [How to style a component and create a customizable component](documentation/development/how-to-style-a-component.md)
      3. [How to handle data fetching for widgets](documentation/development/how-to-fetch-data-for-widgets.md)
      4. [How to add a dependency to a SharedComponents package](documentation/development/how-to-add-a-dependency-to-a-cs-package.md)
      5. [How to export my component flow types](documentation/development/how-to-export-the-flow-types.md)
      6. [[ADVANCED] How to create a new package](documentation/development/how-to-create-a-package.md)
      7. [[ADVANCED] How to add a new icon to the icomoon font](documentation/development/how-to-add-a-new-icomoon.md)
      8. [[ADVANCED] Optimize your package before publishing](documentation/development/how-to-optimize-a-package.md)
   5. [Test your changes [TODO: improve this section]](documentation/how-to-contribute/4-development-flow.md#launch-the-tests)
5. [SharedComponents Git flow: Share your contribution](documentation/how-to-contribute/5-share-your-contribution.md)
   1. [Commit message structure](documentation/how-to-contribute/5-share-your-contribution.md#commits-syntax)
   2. [How to declare a breaking change](documentation/how-to-contribute/5-share-your-contribution.md#breaking-changes)
   3. [Merging your code](documentation/how-to-contribute/5-share-your-contribution.md#merging-your-code)
   4. [Dealing with conflicts](documentation/how-to-contribute/5-share-your-contribution.md#dealing-with-conflicts)
   5. [How to amend your commit if your feature is not validated](documentation/how-to-contribute/5-share-your-contribution.md#how-to-amend-your-commit-if-your-feature-is-not-validated)
   6. [Storybook and packages publication](documentation/how-to-contribute/5-share-your-contribution.md#storybook-and-cs-packages-publication)
6. [Troubleshooting](documentation/how-to-contribute/6-troubleshooting.md)
   1. [Don't panic and yarn reset](documentation/how-to-contribute/6-troubleshooting.md#dont-panic-and-yarn-reset)
   2. [Debugging Verdaccio](documentation/how-to-contribute/6-troubleshooting.md#debugging-verdaccio)

## Technical standards

1. [Tests](documentation/technical-standards/tests.md)
2. [Architecture](documentation/technical-standards/architecture.md)
3. Development Flow
4. 0 bug / 0 perf problem
5. [Up to date dependencies](documentation/technical-standards/up-to-date-dependencies.md)
6. Iso-prod staging
7. [Reuse](documentation/technical-standards/reusable-packages.md)

## For the Core team

1. [Debugging Verdaccio](documentation/for-the-core-team/debugging-verdaccio.md)
2. [Configuring an isolated test environment](documentation/for-the-core-team/how-to-prepare-test-environment.md)
3. [Why did we decide to use aliases to make `yarn link` work ?](documentation/for-the-core-team/why-using-aliases-for-yarn-link-is-better.md)
4. [Using absolute paths to import files](documentation/for-the-core-team/using-absolute-paths-to-import-files.md)

## Legacy doc to rearrange

1. [Development](documentation/legacy/development.md)
2. [Tests](documentation/legacy/test.md)
3. [Best Practices / Troubleshoot / FAQ](documentation/legacy/best-practices.md)
