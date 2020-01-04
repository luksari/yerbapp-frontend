/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { LoginResponse } from 'api/AuthApi';
import { UserRoles } from 'utils/types';

interface AuthSliceState {
  token?: string;
  userId?: number;
  userRole?: UserRoles;
  expireDate?: Date;
}

const initialState: AuthSliceState = {
  token: undefined,
  userId: undefined,
  userRole: undefined,
};

export const { name, actions, reducer } = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<LoginResponse>) {
      state.token = action.payload.access_token;
      state.userId = action.payload.user_id;
      state.userRole = action.payload.user_role;
    },
    unsetUser(state) {
      state.token = undefined;
      state.userId = undefined;
      state.userRole = undefined;
    },
  },
});

const selectAuthDomain = (state) => state[name] as AuthSliceState || {};

export const makeSelectIsAuthenticated = () => createSelector(
  selectAuthDomain,
  (substate) => substate.userId || substate.token || localStorage.getItem('token') !== null,
);

export const makeSelectUserId = () => createSelector(
  selectAuthDomain,
  (substate) => substate.userId || localStorage.getItem('userId'),
);
export const makeSelectIsAdmin = () => createSelector(
  selectAuthDomain,
  (substate) => substate.userRole || localStorage.getItem('userRole') === 'admin',
);
