import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AsyncStatus } from 'utils/types';
import { LoginFormData } from './types';
/* eslint-disable no-param-reassign */

export interface LoginSliceState {
  status: AsyncStatus;
  error: string;
  data: LoginFormData;
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
    setLoginSuccess(state) {
      state.status = AsyncStatus.Success;
    },
    setLoginFailed(state, action: PayloadAction<string>) {
      state.status = AsyncStatus.Error;
      state.error = action.payload;
    },
  },
});
