/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { LoginResponse } from 'api/AuthApi';

interface AuthSliceState {
  token?: string;
  userId?: string;
}

const initialState: AuthSliceState = {
  token: undefined,
  userId: undefined,
};

export const { name, actions, reducer } = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<LoginResponse>) {
      state.token = action.payload.access_token;
      state.userId = action.payload.user_id;
    },
  },
});

const selectAuthDomain = (state) => state[name] as AuthSliceState || {};

export const makeSelectIsAuthenticated = () => createSelector(
  selectAuthDomain,
  (substate) => substate.userId && substate.token && localStorage.getItem('token') !== undefined,
);
