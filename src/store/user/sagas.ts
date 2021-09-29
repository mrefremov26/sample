import { IUserMe } from '@interfaces';
import { SagaIterator } from '@redux-saga/core';
import { call, put, takeEvery } from 'redux-saga/effects';

import { actions } from '@store';

function* userWatcher(): SagaIterator {
  yield takeEvery(actions.user.init_user_start.type, meWorker);
}

export function* meWorker() {
  try {
    const message: IUserMe = yield call(fakeMe);
    yield put(actions.user.init_user_success(message));
  } catch (e) {
    yield put(actions.user.init_user_fail(e));
  }
}

export { userWatcher };

const fakeMe = async () => {
  return { currency: '', email: 'string', fullName: 'string', language: 'string', uuid: 'string' };
};
