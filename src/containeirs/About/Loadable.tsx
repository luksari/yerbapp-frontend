import React from 'react';
import loadable from 'utils/Loadable';

export const Login = loadable(() => import('./About'), {
  fallback: <div>loading...</div>,
});
