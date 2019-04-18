import { addDecorator, configure } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';

import '@babel/polyfill';

addDecorator(
  withOptions({
    name: 'Shared Components',
    url: 'https://github.com/shared-components/shared-components',
    sortStoriesByKind: true,
  })
);

configure(loadStories, module);

function importAll(req) {
  req.keys().forEach(filename => req(filename));
}

function loadStories() {
  let req;

  req = require.context(`../packages/product/src`, true, /.stories.js$/);
  importAll(req);

  req = require.context(`../packages/molecules/src`, true, /.stories.js$/);
  importAll(req);

  req = require.context(`../packages/atoms/src`, true, /.stories.js$/);
  importAll(req);
}
