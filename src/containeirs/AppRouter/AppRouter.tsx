import React, { FC } from 'react';
import { Switch, Redirect } from 'react-router';
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
import { AdminPanel } from 'containeirs/AdminPanel';
import { NotAllowed } from 'containeirs/NotAllowed';
import { Manufacturers } from 'containeirs/Manufacturers';
import { Users } from 'containeirs/Users';
import { Types } from 'containeirs/Types';
import { Ranks } from 'containeirs/Ranks';
import { ManufacturerCreateForm, ManufacturerEditForm } from 'containeirs/Manufacturers/containers';
import { TypeCreateForm, TypeEditForm } from 'containeirs/Types/containers';
import { RankCreateForm, RankEditForm } from 'containeirs/Ranks/containers';


export const AppRouter: FC = () => {
  return (
    <Switch>
      <AuthenticatedRoute exact path="/" component={Home} layout={HomepageLayout} canBeGuest />
      <AuthenticatedRoute path="/tutorial" component={Tutorial} layout={AppLayout} canBeGuest />
      <AuthenticatedRoute path="/about" component={About} layout={AppLayout} canBeGuest />
      <AuthenticatedRoute path="/explore" component={Explore} layout={AppLayout} canBeGuest />
      <AuthenticatedRoute path="/profile" component={Profile} layout={AppLayout} />
      <AuthenticatedRoute exact path="/admin" component={AdminPanel} layout={AppLayout} mustBeAdmin />

      <AuthenticatedRoute exact path="/admin/manufacturers" component={Manufacturers} layout={AppLayout} mustBeAdmin />
      <AuthenticatedRoute path="/admin/manufacturers/create" component={ManufacturerCreateForm} layout={AppLayout} mustBeAdmin />
      <AuthenticatedRoute path="/admin/manufacturers/:manufacturerId" component={ManufacturerEditForm} layout={AppLayout} mustBeAdmin />

      <AuthenticatedRoute exact path="/admin/types" component={Types} layout={AppLayout} mustBeAdmin />
      <AuthenticatedRoute path="/admin/types/create" component={TypeCreateForm} layout={AppLayout} mustBeAdmin />
      <AuthenticatedRoute path="/admin/types/:typeId" component={TypeEditForm} layout={AppLayout} mustBeAdmin />

      <AuthenticatedRoute exact path="/admin/ranks" component={Ranks} layout={AppLayout} mustBeAdmin />
      <AuthenticatedRoute path="/admin/ranks/create" component={RankCreateForm} layout={AppLayout} mustBeAdmin />
      <AuthenticatedRoute path="/admin/ranks/:rankId" component={RankEditForm} layout={AppLayout} mustBeAdmin />

      <AuthenticatedRoute path="/admin/users" component={Users} layout={AppLayout} mustBeAdmin />

      <LayoutRoute path="/login" component={Login} layout={AuthLayout} />
      <LayoutRoute path="/register" component={Register} layout={AuthLayout} />

      {/** Do not place custom routes below, it is for redirect logic */}
      <LayoutRoute path="/405" component={NotAllowed} layout={AuthLayout} />
      <LayoutRoute path="/404" component={NoMatch} layout={AuthLayout} />
      <Redirect to="/404" />
    </Switch>
  );
};
