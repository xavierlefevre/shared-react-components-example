# Make light packages

## Build ES6 modules

In order for your users to benefit from tree shaking (either with [webpack](https://webpack.js.org/guides/tree-shaking/) or [rollup](https://rollupjs.org/guide/en#tree-shaking)), your code needs to be exported in the form of ES6 modules.

To do this, there are three steps:

1. Build your package using babel (to turn JS code into ES6 modules)

   Babel is configured using [babel.config.js](../packages/atoms/babel.config.js) file and you can see the command we use in the [package.json](../packages/atoms/package.json#L24). To build ES6 modules, the important property is [this one](../packages/atoms/babel.config.js#L5)

2. Specify the build output as the `module` entry point in the `package.json` [like here](../packages/atoms/package.json#L6)
3. Make sure any code that is not JS code is not left out

   We use a script called [deployAssets.sh](../packages/atoms/deployAssets.sh) which copies all non-JS files from the `src` folder to the `build` folder, since they are ignored by Babel.

4. Specify where your package cannot be tree shaked (the side effects)

   When someone uses your package, tree-shaking will remove all imports that are
   considered useless ie all imports that are not **used** in the final bundle.

   Some files however must be imported even if they are not used, like css files.
   They are said to have **side effects**.

   To make sure files with side effects are not ignored (and that unused files
   **without** side effects **are** ignored, you must add a special property in
   the `package.json` called `sideEffects` which contains the list of files with
   side effects like [here](../packages/atoms/package.json#L7). This list should
   be empty if you have no file with side effects.
