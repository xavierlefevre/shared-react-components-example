const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const StatsPlugin = require('stats-webpack-plugin');

// Get the list of packages
const packagesPath = path.resolve(__dirname, '../packages');
const packages = fs
  .readdirSync(packagesPath)
  .filter(f => fs.statSync(path.join(packagesPath, f)).isDirectory());

module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.module.rules.push(
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\.(png|svg|jpg|gif|woff|ttf|eot|otf)$/,
      loader: 'file-loader'
    }
  );

  // To be compatible with the old numbro version share-comparator uses
  storybookBaseConfig.node = {
    fs: 'empty'
  };

  // Disable babel on transpiled files
  storybookBaseConfig.module.rules[0].exclude = /(node_modules|build|lib)/;

  // NODE_ENV already set by storybook
  storybookBaseConfig.plugins.push(
    new webpack.EnvironmentPlugin({
      APP_ENV: 'development'
    })
  );

  // Create a vendor bundle for external dependencies
  storybookBaseConfig.optimization = {
    ...storybookBaseConfig.optimization,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    }
  }

  // Log bundles content for debugging with webpack-bundle-analyzer
  if (configType === 'PRODUCTION') {
    storybookBaseConfig.plugins.push(
      new StatsPlugin('stats.json', {
        chunkModules: true
      })
    );
  }

  storybookBaseConfig.resolve.alias = {};
  packages.forEach(function(package) {
    storybookBaseConfig.resolve.alias[`shared-components-${package}`] = path.resolve(
      __dirname,
      `../packages/${package}/src`
    );
    storybookBaseConfig.resolve.alias[
      `@shared-components/${package}$`
    ] = path.resolve(__dirname, `../packages/${package}/src`);
  });

  storybookBaseConfig.resolve.alias['styled-components'] = path.resolve(
    'node_modules',
    'styled-components'
  );
  storybookBaseConfig.resolve.alias['shared-components-storybook-utils'] = path.resolve(
    '.storybook',
    'utils'
  );

  // Exclude node_modules from watcher to avoid CPU/Memory explosion
  storybookBaseConfig.watchOptions = {
    ignored: /node_modules/
  };

  return storybookBaseConfig;
};
