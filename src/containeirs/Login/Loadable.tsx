import React from 'react';
import loadable from 'utils/Loadable';

export const Login = loadable(() => import('./Login'), {
  fallback: <div>loading...</div>,
});
