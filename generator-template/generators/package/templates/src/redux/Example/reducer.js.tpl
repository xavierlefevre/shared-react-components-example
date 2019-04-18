// @flow

import {
  enhanceDefaultState,
  enhanceReducer,
} from 'redux-async-actions-factory';

import actionTypes, { apiActionsNames, storeName } from './actionTypes';

const defaultState = {
  ...enhanceDefaultState(apiActionsNames),
  foo: '',
};

const reducer = (
  state: <%= capitalizeName %>StateType,
  action: ActionType<*>
): <%= capitalizeName %>StateType => {
  switch (action.type) {
    case actionTypes.REQUEST.ACTION_FOO.SUCCESS: {
      return {
        ...state,
        foo: action.payload,
      };
    }
    default:
      return state;
  }
};

export default (state: <%= capitalizeName %>StateType = defaultState, action: ActionType<*>) => 
  enhanceReducer(storeName, state, action, defaultState, reducer);
