import React, {
  FC, ReactType, ComponentType,
} from 'react';
import { Route, Redirect, RouteProps } from 'react-router';
import { useGetMeRoleQuery } from 'generated/graphql';
import { UserRoles } from 'utils/types';
import { Loader } from 'components/Loader';
import { LayoutRoute } from './LayoutRoute';

interface Props extends RouteProps {
  layout?: ReactType;
  canBeGuest?: boolean;
  mustBeAdmin?: boolean;
  component: ComponentType<any>;

}

export const AuthenticatedRoute: FC<Props> = ({
  layout: Layout,
  component: Component,
  canBeGuest,
  mustBeAdmin,
  ...rest
}) => {
  const { data, loading } = useGetMeRoleQuery({ skip: !mustBeAdmin });
  if (loading) {
    return <Loader fullscreen />;
  }

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!canBeGuest && !localStorage.getItem('token')) {
          return <Redirect to="/login" />;
        }

        if (mustBeAdmin && data && data.whoAmI.role !== UserRoles.ADMIN) {
          return <Redirect to="/405" />;
        }

        let content: any = <Component {...props} />;

        if (Layout) {
          content = (
            <LayoutRoute component={Component} layout={Layout} />
          );
        }

        return content;
      }}
    />
  );
};
