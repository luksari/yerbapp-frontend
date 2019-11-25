import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AsyncStatus } from 'utils/types';
import { RegisterFormData } from './types';
/* eslint-disable no-param-reassign */

export interface RegisterSliceState {
  status: AsyncStatus;
  error: string;
  data: RegisterFormData;
}

export const initialState: RegisterSliceState = {
  status: AsyncStatus.Unset,
  error: '',
  data: null,
};

export const { name, actions, reducer } = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setRegisterPending(state, action: PayloadAction<RegisterFormData>) {
      state.status = AsyncStatus.Pending;
      state.data = action.payload;
    },
    setRegisterSuccess(state) {
      state.status = AsyncStatus.Success;
    },
    setRegisterFailed(state, action: PayloadAction<string>) {
      state.status = AsyncStatus.Error;
      state.error = action.payload;
    },
  },
});
