import { call, put, takeLatest } from 'redux-saga/effects';
import { AuthApi } from 'api/AuthApi';
import { PayloadAction } from '@reduxjs/toolkit';
import { notificationError, notificationSuccess } from 'components/Notification';
import { LoginFormData } from './types';
import { actions } from './slice';

export function* loginSaga({ payload }: PayloadAction<LoginFormData>) {
  try {
    yield call(AuthApi.login, {
      username: payload.username,
      password: payload.password,
    });
    yield put(actions.setLoginSuccess());
    yield call(notificationSuccess, {
      title: 'Sukces',
      message: 'Zalogowano pomyślnie!',
    });
  } catch (error) {
    console.error(error);
    yield put(actions.setLoginFailed(error));
    yield call(notificationError, {
      title: 'Wystąpił błąd',
      message: 'Nie udało się zalogować!',
    });
  }
}

export function* watchLoginSaga() {
  yield takeLatest(actions.setLoginPending, loginSaga);
}
