# Why did we decide to use aliases for yarn link to work ?

Using `yarn link` is always a difficult task when working on a project with peer dependencies (if you google "npm link and peer dependencies", you can find many references and bug report). With Shared Components, it is even more difficult due to the way Lerna hoist dependencies shared between the packages it holds.

In this section, I will describe the features we are trying to achieve with the `yarn link`, the solution we studied and why we decided to ask host project to add aliases in their webpack configuration.

## What must work when I `yarn link` ?

Let's picture the following situation:

- P is a package from Shared Components
- H is the host application. H uses P.
- P has three dependencies, A, B and C.
- A is a peer dependency of P. To work properly, there can only be a single instance of A in the final bundle.
- B and C are both regular dependencies of P, but other packages in SharedComponents depends on B, while only P depends on C.

In a regular installation of P in H, the folder hierarchy would look like this:

```
H/
├── node_modules/
│   ├── A
│   └── P
│       ├── build/
│       └── node_modules/
│           ├── B
│           └── C
└── src/
```

And in Shared Components, this is how it would look like:

```
shared-components/
├── node_modules/
│   ├── A
│   └── B
└── packages/
    └── P
        ├── build/
        ├── node_modules/
        │   └── C
        └── src/
```

In this situation, when building my project H, I want:

1. To be able to compile my application bundle
2. To use the code in `SharedComponents/packages/P` and not the one in `H/node_modules/P` to do so (to test the changes I made there)
3. To use only the package A stored in `H/node_modules` and not the one in `SharedComponents/node_modules` (to make sure only one instance exists in my whole application)

## `yarn link`, what else ?

By using only a `yarn link` without any further configuration, you remove the whole P folder from `H/mode_modules` and replace it by a link pointing to the one in `SharedComponents/packages`. When building your application, `webpack` will **follow** this link and resolve P's dependencies from its new location, which means from within SharedComponents. As a result, the package A will be retrieved from SharedComponents/node_modules, which is not good (because the rest of H will use `H/node_modules/A`, leading to two instances of the same package in final bundle, and that is forbidden).

## Use aliases to avoid issues with peer dependencies

By using aliases in webpack configuration, we can specify precisely where to retrieve A from, regardless of the path of the importing file.

```json
  config.resolve.alias['A']: path.resolve('node_modules', 'A')
```

## Adding aliases for each peer dependency is painful. Isn't there another way ?

We tried several other approaches, but none were satisfying. Here is a short summary of all our other attempts.

### Telling `yarn link` not to follow simlinks is not enough

By adding in H's webpack config a single option, webpack would not follow symlinks.

```json
  config.resolve.symlinks: false
```

This would resolve the peer dependency problem and is the accepted solution for most open-source project. But in our case, this is not valid due to lerna hoisting.

When this option is active, webpack acts exactly as if the folder P from SharedComponents was _copied_ into `H/node_modules`. The resulting file structure (in the eyes of webpack, not for real) looks like this:

```
H/
├── node_modules/
│   ├── A
│   └── P
│       ├── build/
│       ├── node_modules/
│       │   └── C
│       └── src/
└── src/
```

And as you can see, B is not available anymore, which means the project cannot be built.

### Bundling all necessary dependencies in P's bundle works but drastically increases the build time

To solve the issue mentionned above, I tried to build a different version of P's bundle, one in which all dependencies would be included (except for the peer dependencies). This way, it did not matter if B was available or not in H's node_modules, as it was already **inside** P's bundle. But when proof-testing this solution on Widgets, the build time of the bundle jumped from 3 seconds to 40 seconds. This was not acceptable, especially in a context where developers want to build P in "watch mode".

### You can manually copy the built bundle into your node_modules every time it changes

A working solution would be to install P in H's node_modules, build your local P package and then copy all built files within `H/node_modules/P/build`, leaving all dependencies available. This would work. But if you want to quickly test the impact of different modifications on P in your project, this might get very annoying (besides, this is the kind of situation were human mistakes are frequent).

### You can manually create a symlink between the build/ folders instead of between packages

In that case, you can no longer use `yarn link` so you are on your own. But creating a symlink from H/node_modules/P/build to SharedComponents/packages/P/build should work (but don't forget to add the `config.resolve.symlinks: false` option in webpack to avoid the peer dependency problem). However, if you added a new dependency to P, you will not be able to test your feature that way.

### You can set up a local NPM repository where your local P would be uploaded after each build and then installed on your project

This is probably the closest you can get from the real workflow. However we have not tested this solution, so we can't know for sure how easy / hard it can be. Some documentation [here](https://www.npmjs.com/package/local-npm).
