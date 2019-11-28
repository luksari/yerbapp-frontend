import { call, put, takeLatest } from 'redux-saga/effects';
import { AuthApi, LoginResponse } from 'api/AuthApi';
import { PayloadAction } from '@reduxjs/toolkit';
import { notificationError, notificationSuccess } from 'components/Notification';
import { LoginFormData } from './types';
import { actions } from './slice';

export function* loginSaga({ payload }: PayloadAction<LoginFormData>) {
  try {
    const response: LoginResponse = yield call(AuthApi.login, {
      username: payload.username,
      password: payload.password,
    });
    yield put(actions.setLoginSuccess(response));
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

function* setTokenSaga(action: PayloadAction<LoginResponse>) {
  yield localStorage.setItem('token', action.payload.access_token);
  yield localStorage.setItem('userId', action.payload.user_id);
}

export function* watchLoginSaga() {
  yield takeLatest(actions.setLoginPending, loginSaga);
  yield takeLatest(actions.setLoginSuccess, setTokenSaga);
}
