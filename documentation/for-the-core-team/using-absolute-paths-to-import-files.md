# Using absolute paths to import files

```js
// what we want
import { Header } from 'shared-components-product/components'; // this is not an actual path on the file system, but it resolves to one.

// what we don't want (to avoid the ../../.. headaches)
import { Header } from '../../../components';
```

## How Webpack (and other tools) know how to resolve absolute paths in SharedComponents

In the configuration files of Webpack, Jest, ESLint, Flow, ..., we've aliased `shared-components-<package_name>` for the path of the `src` folder of the package in their configuration files.

Webpack (and the other tools) are thus able to know that `import from 'shared-components-product/components'` actually means importing from `<SharedComponents_root>/packages/fundsheet/src/components`.

## Avoiding conflicts with existing npm packages

Note that the naming standard of the alias is `shared-components-<package_name>`, and not simply `<package_name>`. We made it this specific to avoid any conflict with existing npm packages.

An example of a potential conflict: there already is a published `entities` package on npm, unrelated to SharedComponents.  
If we were to simply alias `entites` instead `shared-components-entites` in webpack configuration, neither SharedComponents nor its dependencies would be able to `import from` the npm-published `entities` package, as it would resolve to the path of the `entities` package in SharedComponents instead!
