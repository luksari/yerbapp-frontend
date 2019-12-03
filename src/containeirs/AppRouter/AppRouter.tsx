import React, { FC } from 'react';
import { Switch, Route } from 'react-router';
import { Login } from 'containeirs/Login';
import Register from 'containeirs/Register/Register';
import AuthenticatedRoute from 'components/Routes/AuthenticatedRoute';
import { Layout } from 'containeirs/Layout';
import Home from 'containeirs/Home/Home';

export const AppRouter: FC = () => {
  return (
    <Switch>
      <AuthenticatedRoute exact path="/" component={Home} layout={Layout} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </Switch>
  );
};
