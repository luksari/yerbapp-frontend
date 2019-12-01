import React, { ReactType, FC, ComponentType } from 'react';
import { RouteProps, Route } from 'react-router';

interface Props extends RouteProps {
  layout?: ReactType;
  component: ComponentType<any>;
}

export const LayoutRoute: FC<Props> = ({
  layout: Layout,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      let content: any = <Component {...props} />;

      if (Layout) {
        content = (
          <Layout>
            <Component {...props} />
          </Layout>
        );
      }

      return content;
    }}
  />
);
