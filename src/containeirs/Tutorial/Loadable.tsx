import React from 'react';
import loadable from 'utils/Loadable';

export const Tutorial = loadable(() => import('./Tutorial'), {
  fallback: <div>loading...</div>,
});
