import React from 'react';
import loadable from 'utils/Loadable';

export const NoMatch = loadable(() => import('./NoMatch'), {
  fallback: <div>loading...</div>,
});
