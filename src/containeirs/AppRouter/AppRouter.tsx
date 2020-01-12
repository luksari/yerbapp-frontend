import { AppLayout } from 'components/Layouts';
import { AuthLayout } from 'components/Layouts/AuthLayout';
import { HomepageLayout } from 'components/Layouts/HomepageLayout';
import { AuthenticatedRoute, LayoutRoute } from 'components/Routes';
import { About } from 'containeirs/About';
import { AdminPanel } from 'containeirs/AdminPanel';
import { Home } from 'containeirs/Home';
import { Login } from 'containeirs/Login';
import { Manufacturers } from 'containeirs/Manufacturers';
import { ManufacturerCreateForm, ManufacturerEditForm } from 'containeirs/Manufacturers/containers';
import { NoMatch } from 'containeirs/NoMatch';
import { NotAllowed } from 'containeirs/NotAllowed';
import { Explore } from 'containeirs/Products';
import { ProductCreateForm, ProductEditForm } from 'containeirs/Products/containers';
import { Profile } from 'containeirs/Profile';
import { Ranks } from 'containeirs/Ranks';
import { RankCreateForm, RankEditForm } from 'containeirs/Ranks/containers';
import { Register } from 'containeirs/Register';
import { Tutorial } from 'containeirs/Tutorial';
import { Types } from 'containeirs/Types';
import { TypeCreateForm, TypeEditForm } from 'containeirs/Types/containers';
import { Users } from 'containeirs/Users';
import React, { FC } from 'react';
import { Redirect, Switch } from 'react-router';


export const AppRouter: FC = () => {
  return (
    <Switch>
      <AuthenticatedRoute exact path="/" component={Home} layout={HomepageLayout} canBeGuest />
      <AuthenticatedRoute path="/tutorial" component={Tutorial} layout={AppLayout} canBeGuest />
      <AuthenticatedRoute path="/about" component={About} layout={AppLayout} canBeGuest />
      <AuthenticatedRoute path="/profile" component={Profile} layout={AppLayout} />

      <AuthenticatedRoute exact path="/products" component={Explore} layout={AppLayout} canBeGuest />
      <AuthenticatedRoute path="/products/create" component={ProductCreateForm} layout={AppLayout} />
      <AuthenticatedRoute path="/products/:productId" component={ProductEditForm} layout={AppLayout} />

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
