import { call, put, takeLatest } from 'redux-saga/effects';
import { AuthApi } from 'api/AuthApi';
import { PayloadAction } from '@reduxjs/toolkit';
import { notificationError, notificationSuccess } from 'components/Notification';
import { RegisterFormData } from './types';
import { actions } from './slice';

export function* registerSaga({ payload }: PayloadAction<RegisterFormData>) {
  try {
    yield call(AuthApi.register, {
      username: payload.username,
      password: payload.password,
      email: payload.email,
    });
    yield put(actions.setRegisterSuccess());
    yield call(notificationSuccess, {
      title: 'Sukces',
      message: 'Pomyślnie utworzono konto!',
    });
  } catch (error) {
    console.error(error);
    yield put(actions.setRegisterFailed(error));
    yield call(notificationError, {
      title: 'Wystąpił błąd',
      message: 'Nie udało się zarejestrować!',
    });
  }
}

export function* watchRegisterSaga() {
  yield takeLatest(actions.setRegisterPending, registerSaga);
}
