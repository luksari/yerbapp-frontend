import React, { FC } from 'react';
import { Switch } from 'react-router';
import { Login } from 'containeirs/Login';
import { Register } from 'containeirs/Register';
import { AppLayout } from 'components/Layouts';
import { AuthLayout } from 'components/Layouts/AuthLayout';
import { AuthenticatedRoute, LayoutRoute } from 'components/Routes';
import { Tutorial } from 'containeirs/Tutorial';
import { About } from 'containeirs/About';

export const AppRouter: FC = () => {
  return (
    <Switch>
      <AuthenticatedRoute exact path="/tutorial" component={Tutorial} layout={AppLayout} canBeGuest />
      <AuthenticatedRoute exact path="/about" component={About} layout={AppLayout} canBeGuest />
      <LayoutRoute exact path="/login" component={Login} layout={AuthLayout} />
      <LayoutRoute exact path="/register" component={Register} layout={AuthLayout} />
    </Switch>
  );
};
