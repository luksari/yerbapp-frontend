import { createSlice } from '@reduxjs/toolkit';
/* eslint-disable no-param-reassign */

export interface CurrentUser {
  token: string | null;
  isAuthenticated: boolean;
}

const initialState: CurrentUser = {
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
      state.token = null;
    },
  },
});
