import React from 'react';
import { Route, Redirect } from 'react-router';


const AuthenticatedRoute = ({
  layout: Layout,
  component: Component,
  props: childProps,
  canBeGuest,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      let content = <Component {...props} {...childProps} authorized={!canBeGuest} />;
      if (!canBeGuest && !localStorage.getItem('token')) {
        return <Redirect to="/login" />;
      }

      if (Layout) {
        content = (
          <Layout>
            <Component {...props} {...childProps} authorized={!canBeGuest} />
          </Layout>
        );
      }

      return content;
    }}
  />
);

export default AuthenticatedRoute;
