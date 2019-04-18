// @flow

import { enhanceActionTypes } from 'redux-async-actions-factory';

export const storeName = '<%= upperName %>';
export const apiActionsNames = ['ACTION_FOO'];

export default {
  ...enhanceActionTypes(storeName, apiActionsNames),
};
