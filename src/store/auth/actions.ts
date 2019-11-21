import { createAction } from '@reduxjs/toolkit';
import { AUTHENTICATE, UNAUTHENTICATE } from './constants';

export const setAuthenticated = createAction(AUTHENTICATE);
export const setUnauthenticated = createAction(UNAUTHENTICATE);
