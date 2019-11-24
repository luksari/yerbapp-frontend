import { takeLatest, put, call } from 'redux-saga/effects';
import { actions } from './slice';

function* authUserSaga(action) {
  try {
    // const response = yield call()
  } catch (err) {
    yield put(actions.setAuthError(err));
  }
}

function* checkAuthTimeoutSaga(action) {
  yield;
}

function* logoutSaga(action) {
  yield;
}

function* authSagaWatcher() {
  yield takeLatest(actions.setAuthBegin, authUserSaga);
}
