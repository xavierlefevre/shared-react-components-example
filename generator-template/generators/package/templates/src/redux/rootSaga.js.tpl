// @flow
import { all } from 'redux-saga/effects';

import { sagas as <%= capitalizeName %>Sagas } from './<%= capitalizeName %>';

export default function*(): SagaType {
  yield all([<%= capitalizeName %>Sagas()]);
}
