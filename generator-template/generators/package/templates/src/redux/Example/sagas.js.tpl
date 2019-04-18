// @flow
import { put, takeLatest, call } from 'redux-saga/effects';

import * as api from './api';
import actionTypes from './actionTypes';
import actionCreators from './actionCreators';
import { modelize<%= capitalizeName %>Response } from './modelize';

export function* requestActionFooSaga(
  action: ActionType<{ foo: string }>
): SagaType {
  try {
    const { foo } = action.payload;
    const apiResponse = yield call(api.apiCall, foo);
    const response = modelize<%= capitalizeName %>Response(apiResponse);

    yield put(actionCreators.requestActionFooSuccess(response));
  } catch (err) {
    yield put(actionCreators.requestActionFooFailed());
  }
}

export default function*(): SagaType {
  yield takeLatest(actionTypes.REQUEST.ACTION_FOO.START, requestActionFooSaga);
}
