import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DatedMessage, AsyncStatus } from '../../utils/types';
/* eslint-disable no-param-reassign */

export interface SignUpSliceState {
  status: AsyncStatus;
  messages: DatedMessage[];
  errors: string[];
}

export const initialState: SignUpSliceState = {
  status: AsyncStatus.Unset,
  messages: [],
  errors: [],
};

export const { name, actions, reducer } = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    /** @TODO set proper type of action that will be user body */
    setSignUpPending(state, action: PayloadAction<any>) {
      state.status = AsyncStatus.Pending;
      state.messages.push({ body: 'Signing up...', time: new Date() });
    },
  },
});
