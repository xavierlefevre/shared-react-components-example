# Add a dependency to a SharedComponents package

- To add an other package from the mono-repo to your package (package names are specified in package.json files):

  ```bash
  yarn lerna add --scope=<my-package> <package-to-add>
  yarn
  ```

- To add an external dependency:
  - Add it directly to the `package.json` file of the SharedComponents package
  - Run `yarn` at the root of the SharedComponents.

> :information_source: `yarn add <dependency>` or `yarn upgrade <dependency>` inside a SharedComponents package folder has known issues and shouldn't be used for now. The SharedComponents team is working towards [correcting these issues](https://trello.com/c/cuFoIDVX/330-etqdev-je-peux-installer-une-d%C3%A9pendance-dans-un-package-de-cs).

## How to choose between `dependencies`, `devDependencies` and `peerDependencies`?

**Why should you care ?** : You can read [this article](https://lexi-lambda.github.io/blog/2016/08/24/understanding-the-npm-dependency-model/) to understand why it is not a good thing to only use `dependencies`.

Let's assume there is a `foo` package in SharedComponents, and it needs some functions from the `bar` package (which is external).

1.  If your host project has `bar` as dependency, put `bar` as a `peerDependency` of `foo`. Test locally on your Host project with a `yarn link`. This will probably fail hard in case of a problem.
2.  If your project does not have `bar`, add it in the `dependencies` of `foo`.

- If the dependency is only used for development (ex: flow, jest), don't forget to add it to the `devDependencies` instead

- If the dependency is exposed as part of the package interface, such as React, then you need to add it as a [`peerDependencies`](https://nodejs.org/en/blog/npm/peer-dependencies/). To know when to add a package as a peer dependency, you can refer to [this article](https://lexi-lambda.github.io/blog/2016/08/24/understanding-the-npm-dependency-model/).
  A warning will be printed if someone installs the SharedComponents package on a project on which the peer dependency is not installed.
