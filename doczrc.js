const fs = require('fs');
const path = require('path');

// Get the list of packages
const packagesPath = path.resolve(__dirname, './packages');
const packages = fs
  .readdirSync(packagesPath)
  .filter(f => fs.statSync(path.join(packagesPath, f)).isDirectory());

const emotionPackages = [
  'cache',
  'core',
  'css',
  'is-prop-valid',
  'sheet',
  'styled',
  'styled-base',
  'stylis',
];

export default {
  dest: './docz-static',
  base: '/shared-components/documentation/',
  title: 'shared-components',
  description: 'Shared Components',
  ordering: 'ascending',
  modifyBundlerConfig: config => {
    config.resolve.alias = config.resolve.alias || {};
    packages.forEach(pkg => {
      const packagePath = path.resolve(packagesPath, `${pkg}/src`);
      config.resolve.alias[`shared-components-${pkg}`] = packagePath;
      config.resolve.alias[`@shared-components/${pkg}$`] = packagePath;
    });

    // We need to make sure that docz uses its versions of @emotion because
    // storybook also has its own versions that are way older.
    for (const pkg of emotionPackages) {
      config.resolve.alias[
        `@emotion/${pkg}`
      ] = `docz-theme-default/node_modules/@emotion/${pkg}`;
    }

    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    });

    return config;
  },
};
