import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DatedMessage, AsyncStatus } from 'utils/types';
import { SignUpFormData } from './types';
/* eslint-disable no-param-reassign */

export interface SignUpSliceState {
  status: AsyncStatus;
  messages: DatedMessage[];
}

export const initialState: SignUpSliceState = {
  status: AsyncStatus.Unset,
  messages: [],
};

export const { name, actions, reducer } = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    /** @TODO set proper type of action that will be user body */
    setSignUpPending(state, action: PayloadAction<SignUpFormData>) {
      state.status = AsyncStatus.Pending;
      state.messages.push({ body: `Signing up: ${JSON.stringify(action.payload)}`, time: new Date() });
    },
  },
});
