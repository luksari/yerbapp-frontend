import { call, put, takeLatest } from 'redux-saga/effects';
import { AuthApi } from 'api/AuthApi';
import { PayloadAction } from '@reduxjs/toolkit';
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
  } catch (error) {
    console.error(error);
    yield put(actions.setRegisterFailed(error));
  }
}

export function* watchRegisterSaga() {
  yield takeLatest(actions.setRegisterPending, registerSaga);
}
