import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AsyncStatus } from 'utils/types';
/* eslint-disable no-param-reassign */

export interface AuthState {
  userId: string;
  token: string;
  authStatus: AsyncStatus;
  error: string;
  expirationDate: Date;
}

const initialState: AuthState = {
  userId: '',
  token: '',
  authStatus: AsyncStatus.Unset,
  error: '',
  expirationDate: null,
};

export const { name, actions, reducer } = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    /** @todo Auth payload with login and password? */
    setAuthBegin(state, action: PayloadAction<any>) {
      state.authStatus = AsyncStatus.Pending;
    },
    /** @todo AuthResponse with userId and token */
    setAuthSuccess(state, action: PayloadAction<any>) {
      state.authStatus = AsyncStatus.Success;
    },
    setAuthError(state, action: PayloadAction<string>) {
      state.authStatus = AsyncStatus.Error;
      state.error = action.payload;
    },
    setAuthLogout(state) {
      state.authStatus = AsyncStatus.Unset;
      state.token = null;
      state.userId = null;
    },
    /** @todo Payload with expiration date */
    checkAuthTimeout(state, action: PayloadAction<any>) {
      state.expirationDate = action.payload;
    },
  },
});
