import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserModel } from 'models/user';
import { AsyncStatus, DatedMessage } from 'utils/types';
/* eslint-disable no-param-reassign */

export interface AuthState {
  userId: string;
  token: string;
  loginStatus: AsyncStatus;
  error: string;
  expirationDate: Date;
}

const initialState: AuthState = {
  userId: '',
  token: '',
  loginStatus: AsyncStatus.Unset,
  error: '',
  expirationDate: null,
};

export const { name, actions, reducer } = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    /** @todo Auth payload with login and password? */
    setAuthBegin(state, action: PayloadAction<any>) {
      state.loginStatus = AsyncStatus.Pending;
    },
    /** @todo AuthResponse with userId and token */
    setAuthSuccess(state, action: PayloadAction<any>) {
      state.loginStatus = AsyncStatus.Success;
    },
    setAuthError(state, action: PayloadAction<string>) {
      state.loginStatus = AsyncStatus.Error;
      state.error = action.payload;
    },
    setAuthLogout(state) {
      state.userId = null;
      state.loginStatus = AsyncStatus.Unset;
      state.token = null;
    },
    /** @todo Payload with expiration date */
    checkAuthTimeout(state, action: PayloadAction<any>) {
      state.expirationDate = action.payload;
    },
  },
});
