import React from 'react';
import loadable from 'utils/Loadable';

export const Login = loadable(() => import('./Tutorial'), {
  fallback: <div>loading...</div>,
});
