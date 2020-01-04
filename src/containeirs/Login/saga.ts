import { call, put, takeLatest } from 'redux-saga/effects';
import { AuthApi, LoginResponse } from 'api/AuthApi';
import { PayloadAction } from '@reduxjs/toolkit';
import { notificationError, notificationSuccess } from 'components/Notification';
import { push } from 'connected-react-router';
import { actions as authActions } from 'store/auth/slice';
import { LoginFormData } from './types';
import { actions } from './slice';

export function* loginSaga({ payload }: PayloadAction<LoginFormData>) {
  try {
    const response: LoginResponse = yield call(AuthApi.login, {
      username: payload.username,
      password: payload.password,
    });
    yield put(actions.setLoginSuccess(response));
    yield put(authActions.setUser(response));
    yield call(notificationSuccess, {
      title: 'Sukces',
      message: 'Zalogowano pomyślnie!',
    });
    yield put(push('/explore'));
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
