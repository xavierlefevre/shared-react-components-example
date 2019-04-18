const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const packageJson = require('./package.json');

const nodeModules = [];
[
  ...Object.keys(packageJson.dependencies),
  ...Object.keys(packageJson.peerDependencies),
  ...Object.keys(packageJson.devDependencies),
].forEach(module => {
  nodeModules.push(new RegExp(`^${module}(/.+)?$`));
});

const bundleConfig = {
  externals: nodeModules,
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|build|lib)/,
      },
      {
        test: /SharedComponents-icons\.(eot|svg|ttf|woff)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
          publicPath: './',
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /^(?!.*(SharedComponents-icons)).*\.svg$/, // match every .svg files except SharedComponents-icons.svg
        loader: 'url-loader',
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      APP_ENV: 'development',
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
  resolve: {
    extensions: ['*', '.js'],
    cacheWithContext: false,
    alias: {
      'shared-components-atoms': `${__dirname}/src`,
    },
  },
  entry: `${__dirname}/src/index.js`,
  output: {
    path: `${__dirname}/build`,
    filename: `bundle.${process.env.APP_ENV}.js`,
    library: packageJson.name,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
};

module.exports = [bundleConfig];
