import React, {
  FC, ReactType, ComponentType,
} from 'react';
import { Route, Redirect, RouteProps } from 'react-router';
import { useGetMeQuery, useGetMeRoleQuery } from 'generated/graphql';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { LayoutRoute } from './LayoutRoute';

interface Props extends RouteProps {
  layout?: ReactType;
  canBeGuest?: boolean;
  component: ComponentType<any>;
}

const AuthenticatedRouteRaw: FC<Props> = ({
  layout: Layout,
  component: Component,
  canBeGuest,
  ...rest
}) => {
  const { data } = useGetMeRoleQuery();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!canBeGuest && !localStorage.getItem('token')) {
          return <Redirect to="/login" />;
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
