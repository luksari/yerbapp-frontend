import React, { ComponentType } from 'react';
import { Route, RouteProps, Redirect } from 'react-router';


const AuthenticatedRoute: React.FC<RouteProps> = ({ component, ...rest }) => {
  const Component: ComponentType<any> = component!;
  return (
    <Route
      {...rest}
      render={(props: RouteProps) => localStorage.getItem('token') ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      )}
    />

  );
};

export default AuthenticatedRoute;
