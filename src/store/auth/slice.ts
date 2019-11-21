import { createSlice } from '@reduxjs/toolkit';
/* eslint-disable no-param-reassign */

export interface AuthState {
  token?: string;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  token: '',
  isAuthenticated: false,
};

export const { name, actions, reducer } = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthenticated(state) {
      state.isAuthenticated = true;
      state.token = 'placeholder auth';
    },
    setUnauthenticated(state) {
      state.isAuthenticated = false;
      state.token = undefined;
    },
  },
});
