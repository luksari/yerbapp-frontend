import React from 'react';
import loadable from 'utils/Loadable';

export const Register = loadable(() => import('./Register'), {
  fallback: <div>loading...</div>,
});
