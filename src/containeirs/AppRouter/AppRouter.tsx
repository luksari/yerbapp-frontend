import React, { FC } from 'react';
import { Switch } from 'react-router';
import { Login } from 'containeirs/Login';
import { Register } from 'containeirs/Register';
import { AppLayout } from 'components/Layouts';
import { AuthLayout } from 'components/Layouts/AuthLayout';
import { AuthenticatedRoute, LayoutRoute } from 'components/Routes';
import { Tutorial } from 'containeirs/Tutorial';
import { About } from 'containeirs/About';
import { Home } from 'containeirs/Home';
import { Explore } from 'containeirs/Explore';
import { Profile } from 'containeirs/Profile';
import { HomepageLayout } from 'components/Layouts/HomepageLayout';
import { NoMatch } from 'containeirs/NoMatch';

export const AppRouter: FC = () => {
  return (
    <Switch>
      <AuthenticatedRoute exact path="/tutorial" component={Tutorial} layout={AppLayout} canBeGuest />
      <AuthenticatedRoute exact path="/" component={Home} layout={HomepageLayout} canBeGuest />
      <AuthenticatedRoute exact path="/tutorial" component={Tutorial} layout={AppLayout} canBeGuest />
      <AuthenticatedRoute exact path="/about" component={About} layout={AppLayout} canBeGuest />
      <AuthenticatedRoute exact path="/explore" component={Explore} layout={AppLayout} canBeGuest />
      <AuthenticatedRoute exact path="/profile" component={Profile} layout={AppLayout} />
      <LayoutRoute exact path="/login" component={Login} layout={AuthLayout} />
      <LayoutRoute exact path="/register" component={Register} layout={AuthLayout} />
      <LayoutRoute component={NoMatch} layout={AuthLayout} />
    </Switch>
  );
};
