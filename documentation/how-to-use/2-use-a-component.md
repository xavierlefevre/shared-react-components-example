# Use a SharedComponents component in my project

## Setup and requirements

In order to use shared components, you will need to prepare your project in the following way:

### Set up the required polyfills

Install `babel-polyfill` (please consult [their documentation](https://babeljs.io/docs/en/babel-polyfill) on how to add it to your project).

If not done properly you might get a regenerator runtime exception when running a component.

### Add a custom loader for numbro when using Webpack

**TODO: Remove this section after updating numbro**

Numbro 1.6.2 is not initially compatible with vanilla webpack. You'll need to add the following import rule to your webpack configuration:

```
{
  test: /numbro/,
  use: 'imports-loader?require=>false',
}
```

You'll also need to add `imports-loader` to your dependencies.

**Note**: If using create-react-app, you will have to either eject or override the webpack configuration.

### Set up the APP_ENV environment variable

There are some packages which do not run the same way depending on the environment variable `process.env.APP_ENV` (which can be different from the standard `NODE_ENV`).

You need to define this environment variable before your `package.json` start and build scripts, for example using [cross-env](https://github.com/kentcdodds/cross-env):

```json
{
  "start": "cross-env NODE_ENV=development APP_ENV=development node server",
  "build:prod": "cross-env NODE_ENV=production APP_ENV=production webpack",
  "build:preprod": "cross-env NODE_ENV=production APP_ENV=preproduction webpack",
  "build:integration": "cross-env NODE_ENV=production APP_ENV=development webpack"
}
```

Available environments are:

- `production`
- `preproduction`
- `development`

And you need to configure webpack to use this variable:

```js
// in your webpack.config.js
new webpack.DefinePlugin({
  'process.env': {
    APP_ENV: process.env.APP_ENV,
  },
}),
```

**Note**: If using create-react-app, you will have to either eject or override the webpack configuration.

## Use a component in your app

TODO:

- Add here an example of a UI component integration
- Add here an example of a Widget component integration
  - To show how to use LanguageProvider and api-config
  - But no specific explanation here. Give a link to a documentation containing more details

## Use fonts and icons

You need to import `style.css` from `@shared-components/atoms`. This file is necessary for icons to be working properly.

### With webpack

Import it from your main index.js, or add as an entryPoint

```js
import '!!style-loader!css-loader!@shared-components/atoms/build/style.css';
```

You'll need to set up loaders for eot, woff, ttf and svg files. file-loader is recommended over url-loader for bundle size purposes.

```js
{
  test: /SharedComponents-icons\.(eot|svg|ttf|woff)$/,
  loader: 'file-loader'
}
```

### Manually

You'll need to serve both `@shared-components/atoms/build/style.css` and `@shared-components/atoms/build/fonts` as `./fonts`

## Use flow types exported from a SharedComponents package

In your `.flowconfig` file, you simple have to add the lines:

```bash
[libs]
./node_modules/@shared-components/$PACKAGE_NAME/flow-typed/PackageTypes
```

Run `yarn flow check` on your project => enjoy fixing the dozens of errors! :smiley:
