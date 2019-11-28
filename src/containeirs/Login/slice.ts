import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AsyncStatus } from 'utils/types';
import { LoginResponse } from 'api/AuthApi';
import { LoginFormData } from './types';
/* eslint-disable no-param-reassign */

export interface LoginSliceState {
  status: AsyncStatus;
  error: string;
  data: LoginFormData;
  token?: string;
  userId?: string;
}

export const initialState: LoginSliceState = {
  status: AsyncStatus.Unset,
  error: '',
  data: null,
};

export const { name, actions, reducer } = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLoginPending(state, action: PayloadAction<LoginFormData>) {
      state.status = AsyncStatus.Pending;
      state.data = action.payload;
    },
    setLoginSuccess(state, action: PayloadAction<LoginResponse>) {
      state.status = AsyncStatus.Success;
      state.token = action.payload.access_token;
      state.userId = action.payload.user_id;
    },
    setLoginFailed(state, action: PayloadAction<string>) {
      state.status = AsyncStatus.Error;
      state.error = action.payload;
    },
  },
});
