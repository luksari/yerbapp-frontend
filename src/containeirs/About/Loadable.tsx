import React from 'react';
import loadable from 'utils/Loadable';

export const About = loadable(() => import('./About'), {
  fallback: <div>loading...</div>,
});
