import { all, call } from 'redux-saga/effects';

import { userWatcher } from '@store/user/sagas';

export function* rootSaga() {
  yield all([call(userWatcher)]);
}
