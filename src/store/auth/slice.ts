import { createSlice, PayloadAction } from '@reduxjs/toolkit';
/* eslint-disable no-param-reassign */

export interface AuthState {
  id?: string;
  token?: string;
}

const initialState: AuthState = {
  id: '',
  token: '',
};

export const { name, actions, reducer } = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    /** @TODO pass proper type to payload action from api response */
    setClient(state, action: PayloadAction<any>) {
      state.id = 'placeholder id';
      state.token = 'placeholder auth';
    },
    unsetClient(state) {
      state.token = undefined;
      state.id = undefined;
    },
  },
});
