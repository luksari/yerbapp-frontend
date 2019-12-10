import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import {
  AsyncStatus, ErrorModel,
} from 'utils/types';
import { RegisterFormData } from './types';
/* eslint-disable no-param-reassign */

export interface RegisterSliceState {
  status: AsyncStatus;
  errorResponse: ErrorModel<RegisterFormData>;
  data: RegisterFormData;
}

export const initialState: RegisterSliceState = {
  status: AsyncStatus.Unset,
  errorResponse: undefined,
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
    setRegisterFailed(state, action: PayloadAction<ErrorModel<RegisterFormData>>) {
      state.status = AsyncStatus.Error;
      state.errorResponse = action.payload;
    },
  },
});

const makeSelectDomain = (state) => state[name] as RegisterSliceState;

export const makeSelectError = () => createSelector(
  makeSelectDomain,
  (substate) => substate.errorResponse,
);


export const makeSelectMappedErrors = () => createSelector(
  makeSelectError(),
  (errorResponse) => errorResponse && errorResponse.response.message && errorResponse.response.message.map((msg) => {
    console.warn(msg);
    return msg;
  }),
);
