import React, {
  FC, ReactType, ComponentType,
} from 'react';
import { Route, Redirect, RouteProps } from 'react-router';
import { LayoutRoute } from './LayoutRoute';

interface Props extends RouteProps {
  layout?: ReactType;
  canBeGuest?: boolean;
  component: ComponentType<any>;
}

export const AuthenticatedRoute: FC<Props> = ({
  layout: Layout,
  component: Component,
  canBeGuest,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      let content: any = <Component {...props} authorized={!canBeGuest} />;
      if (!canBeGuest && !localStorage.getItem('token')) {
        return <Redirect to="/login" />;
      }

      if (Layout) {
        content = (
          <LayoutRoute component={Component} layout={Layout} />
        );
      }

      return content;
    }}
  />
);
