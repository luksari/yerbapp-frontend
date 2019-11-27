import { call, put, takeLatest } from 'redux-saga/effects';
import { AuthApi } from 'api/AuthApi';
import { PayloadAction } from '@reduxjs/toolkit';
import { notificationError } from 'components/Notification';
import { LoginFormData } from './types';
import { actions } from './slice';

export function* loginSaga({ payload }: PayloadAction<LoginFormData>) {
  try {
    yield call(AuthApi.login, {
      username: payload.username,
      password: payload.password,
    });
    yield put(actions.setLoginSuccess());
  } catch (error) {
    console.error(error);
    yield put(actions.setLoginFailed(error));
    yield call(notificationError, {
      title: 'Arrrgh Error',
      message: 'Hey yo, there is error!',
    });
  }
}

export function* watchLoginSaga() {
  yield takeLatest(actions.setLoginPending, loginSaga);
}
