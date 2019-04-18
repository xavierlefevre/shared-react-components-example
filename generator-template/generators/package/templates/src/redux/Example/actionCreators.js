// @flow

import { enhanceActionCreators } from 'redux-async-actions-factory';

import actionTypes, { apiActionsNames, storeName } from './actionTypes';

export default {
  ...enhanceActionCreators(storeName, apiActionsNames, actionTypes),
  requestActionFooStart: (foo: string) => ({
    type: actionTypes.REQUEST.ACTION_FOO.START,
    payload: { foo },
  }),
  requestActionFooSuccess: (bar: any) => ({
    type: actionTypes.REQUEST.ACTION_FOO.SUCCESS,
    payload: bar,
  }),
};
