module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb', 'prettier'],
  plugins: ['react', 'jsx-a11y', 'flowtype'],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    allowImportExportEverywhere: true,
  },
  rules: {
    'react/sort-comp': [
      2,
      {
        order: [
          'type-annotations',
          'static-methods',
          'lifecycle',
          'everything-else',
          'render',
        ],
      },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'react/prop-types': 0,
    'react/default-props-match-prop-types': 0,
    'react/no-unused-prop-types': 0,
    'import/prefer-default-export': 0,
    'flowtype/define-flow-type': 1,
    'flowtype/use-flow-type': 1,
    'class-methods-use-this': 'off',
    'react/require-default-props': 'off',
    'react/destructuring-assignment': ['warn', 'always'],
    'react/jsx-one-expression-per-line': 'warn',
    'react/no-access-state-in-setstate': 'warn',
    'react/forbid-prop-types': 'warn',
  },
  settings: {
    'import/resolver': { webpack: { config: './webpack.config.js' } },
    flowtype: { onlyFilesWithFlowAnnotation: false },
  },
};
