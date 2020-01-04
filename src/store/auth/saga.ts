import { takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { LoginResponse } from 'api/AuthApi';
import jwtDecode from 'jwt-decode';
import { actions } from './slice';

export function* setUserSaga(action: PayloadAction<LoginResponse>) {
  yield localStorage.setItem('token', action.payload.access_token);
  yield localStorage.setItem('user', JSON.stringify(jwtDecode(action.payload.access_token)));
  yield localStorage.setItem('userId', `${action.payload.user_id}`);
  yield localStorage.setItem('userRole', `${action.payload.user_role}`);
}

export function* unsetUserSaga() {
  yield localStorage.removeItem('token');
  yield localStorage.removeItem('userId');
  yield localStorage.removeItem('user');
  yield localStorage.removeItem('userRole');
  window.location.reload();
}

export function* watchAuthSaga() {
  yield takeLatest(actions.unsetUser, unsetUserSaga);
  yield takeLatest(actions.setUser, setUserSaga);
}
