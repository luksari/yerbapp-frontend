import React, {
  FC, ReactType, ComponentType,
} from 'react';
import { Route, Redirect, RouteProps } from 'react-router';

interface Props extends RouteProps {
  layout?: ReactType;
  canBeGuest?: boolean;
  component: ComponentType<any>;
}

const AuthenticatedRoute: FC<Props> = ({
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
          <Layout>
            <Component {...props} authorized={!canBeGuest} />
          </Layout>
        );
      }

      return content;
    }}
  />
);

export default AuthenticatedRoute;
