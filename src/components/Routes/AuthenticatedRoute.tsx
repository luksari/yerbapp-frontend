import React, {
  FC, ReactType, ComponentType,
} from 'react';
import { Route, Redirect, RouteProps } from 'react-router';
import { useGetMeRoleQuery } from 'generated/graphql';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { UserRoles } from 'utils/types';
import { LayoutRoute } from './LayoutRoute';

interface Props extends RouteProps {
  layout?: ReactType;
  canBeGuest?: boolean;
  mustBeAdmin?: boolean;
  component: ComponentType<any>;
}

const AuthenticatedRouteRaw: FC<Props> = ({
  layout: Layout,
  component: Component,
  canBeGuest,
  mustBeAdmin,
  ...rest
}) => {
  const { data } = useGetMeRoleQuery({ skip: !mustBeAdmin });

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

const mapStateToProps = createStructuredSelector({

});

const mapDispatchToProps = (dispatch) => ({

});


const withConnect = connect(mapStateToProps, mapDispatchToProps);

export const AuthenticatedRoute = compose(
  withConnect,

)(AuthenticatedRouteRaw);
