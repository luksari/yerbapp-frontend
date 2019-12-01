import React, { FC } from 'react';
import { Switch } from 'react-router';
import { Login } from 'containeirs/Login';
import Register from 'containeirs/Register/Register';
import { AppLayout } from 'components/Layouts';
import { HomeTest } from 'containeirs/Home/Home';
import { AuthLayout } from 'components/Layouts/AuthLayout';
import { AuthenticatedRoute, LayoutRoute } from 'components/Routes';

export const AppRouter: FC = () => {
  return (
    <Switch>
      <AuthenticatedRoute exact path="/" component={HomeTest} layout={AppLayout} />
      <LayoutRoute exact path="/login" component={Login} layout={AuthLayout} />
      <LayoutRoute exact path="/register" component={Register} layout={AuthLayout} />
    </Switch>
  );
};
