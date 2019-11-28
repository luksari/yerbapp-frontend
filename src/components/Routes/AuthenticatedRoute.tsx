import React from 'react';
import { Route, Redirect } from 'react-router';


const AuthenticatedRoute = ({
  layout: Layout,
  component: Component,
  props: childProps,
  canActivate,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      if (!childProps.authenticated || !canActivate) {
        return <Redirect to="/sign_in" />;
      }

      let content = <Component {...props} {...childProps} />;
      if (Layout) {
        content = (
          <Layout>
            <Component {...props} {...childProps} />
          </Layout>
        );
      }

      return content;
    }}
  />
);

export default AuthenticatedRoute;
