{
  "name": "@shared-components/<%= name %>",
  "version": "1.0.0",
  "description": "Shared Components",
  "main": "build",
  "author": "Shared Components",
  "publishConfig": {
    "registry": "{your verdaccio url}"
  },
  "license": "MIT",
  "bundlesize": [
    {
      "path": "build/bundle.production.js",
      "maxSize": "0 kB"
    }
  ],
  "scripts": {
    "build":
      "yarn build:development && yarn build:preproduction && yarn build:production",
    "build:development":
      "cross-env NODE_ENV=development APP_ENV=development webpack-cli",
    "build:analyze":
      "cross-env NODE_ENV=development APP_ENV=development webpack-cli --json > build/stats.development.json && webpack-bundle-analyzer build/stats.development.json",
    "build:watch":
      "cross-env NODE_ENV=development APP_ENV=development webpack-cli -w",
    "build:preproduction":
      "cross-env NODE_ENV=production APP_ENV=preproduction webpack-cli",
    "build:production":
      "cross-env NODE_ENV=production APP_ENV=production webpack-cli",
    "bundlesize":
      "bundlesize",
    "test":
      "cross-env APP_ENV=development yarn test:jest && yarn flow check && yarn test:prettier && yarn test:lint",
    "test:jest":
      "jest --maxWorkers=3 --no-cache --config=jest.config.js 2>&1",
    "test:ci":
      "echo \"`tput setaf 1`Lauching CI tests (preproduction ENV). You should not use it locally. Please use yarn test instead\" && cross-env APP_ENV=development yarn test:jest && yarn flow check && yarn test:prettier && yarn test:lint",
    "test:lint": "eslint . --quiet",
    "test:prettier": "prettier-check \"**/*.js\"",
    "coverage:unit": "jest --coverage",
    "coverage:flow": "flow-coverage-report --config \"./flowcoverage.json\""
  },
  "dependencies": {
    <%_if (includeUIPackage) { -%>
    "@shared-components/atoms": "^10.7.1"<%if (includeRedux || includeApiConfig) { -%>,<%_ } %>
    <%_ } -%>
    <%_if (includeApiConfig) { -%>
    "@shared-components/api-config": "^6.3.4"<%if (includeRedux) { -%>,<%_ } %>
    <%_ } -%>
    <%_if (includeRedux) { -%>
    "redux-async-actions-factory": "^1.1.3",
    "superagent": "^3.8.2"
    <%_ } -%>
  },
  "peerDependencies": {
    "react": "^16.3.1",
    "react-intl": "^2.4.0",
    <%_if (includeRedux) { -%>
    "react-redux": "~5.0.7",
    "redux": "^4.0.1",
    "redux-saga": "~0.16.0",
    <%_ } -%>
    "styled-components": "^4.1.1"
  },
  "devDependencies": {
    "@babel/cli": "^7.1.5",
    "@babel/core": "^7.1.6",
    "@babel/polyfill": "^7.0.0",
    "@babel/preset-env": "^7.1.6",
    "@babel/preset-flow": "^7.0.0",
    "@babel/preset-react": "^7.0.0",
    "babel-eslint": "^10.0.1",
    "babel-jest": "^23.6.0",
    "babel-loader": "^8.0.4",
    "@babel/plugin-proposal-class-properties": "^7.1.0",
    "@babel/plugin-proposal-export-default-from": "^7.0.0",
    "@babel/plugin-proposal-export-namespace-from": "^7.0.0",
    "@babel/plugin-proposal-function-bind": "^7.0.0",
    "@babel/plugin-transform-flow-strip-types": "^7.1.6",
    "bundlesize": "^0.17.0",
    "cross-env": "^5.1.4",
    <%_if (useEnzyme) { -%>
    "enzyme": "^3.8.0",
    "enzyme-adapter-react-16": "^1.7.1",
    <%_ } -%>
    "eslint": "^4.19.1",
    "eslint-config-airbnb": "^16.1.0",
    "eslint-config-prettier": "^2.9.0",
    "eslint-import-resolver-webpack": "^0.9.0",
    "eslint-loader": "^2.0.0",
    "eslint-plugin-flowtype": "^2.46.1",
    "eslint-plugin-import": "^2.9.0",
    "eslint-plugin-jsx-a11y": "^6.0.3",
    "eslint-plugin-react": "^7.7.0",
    "flow-bin": "0.74.0",
    "flow-coverage-report": "^0.5.0",
    "jest": "^22.2.2",
    "jest-styled-components": "^5.0.1",
    "lodash": "^4.17.5",
    "prettier": "^1.11.0",
    "prettier-check": "^2.0.0",
    "react": "^16.3.1",
    "react-intl": "^2.4.0",
    "react-test-renderer": "^16.3.1",
    <%_if (includeRedux) { -%>
    "react-redux": "~5.0.7",
    "redux": " ^4.0.1",
    "redux-saga": "~0.16.0",
    <%_ } -%>
    "styled-components": "4.1.1",
    "superagent": "^3.8.2",
    "webpack": "~4.12.0",
    "webpack-bundle-analyzer": "^2.13.1",
    "webpack-cli": "^3.1.2"
  }
}
