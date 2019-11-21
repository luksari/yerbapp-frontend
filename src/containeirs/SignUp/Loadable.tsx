import React from 'react';
import loadable from 'utils/Loadable';

export const SignUp = loadable(() => import('./index'), {
  fallback: <div>loading...</div>,
});
