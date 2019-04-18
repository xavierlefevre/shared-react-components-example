// @flow

import { enhanceSelectors } from 'redux-async-actions-factory';

import { apiActionsNames, storeName } from './actionTypes';

const selectors: Object = {
  ...enhanceSelectors(storeName, apiActionsNames),
  foo: ({ <%= capitalizeName %> }) => <%= capitalizeName %>.foo,
};

export default selectors;
