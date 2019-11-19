
import React, { ComponentType } from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';

import getInjectors from './reducerInjectors';
import { InjectReducerParams } from '../store/types';

export default ({ key, reducer }: InjectReducerParams) => (WrappedComponent: ComponentType<object>) => {
  class ReducerInjector extends React.PureComponent {
    static WrappedComponent = WrappedComponent;

    // eslint-disable-next-line react/static-property-placement
    static contextTypes = {
      store: Object,
    };

    // eslint-disable-next-line react/static-property-placement
    static displayName = `withReducer(${(WrappedComponent.displayName || WrappedComponent.name || 'Component')})`;

    // eslint-disable-next-line react/destructuring-assignment
    injectors = getInjectors(this.context.store);

    // eslint-disable-next-line react/no-deprecated
    componentWillMount() {
      const { injectReducer } = this.injectors;

      injectReducer(key, reducer);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return hoistNonReactStatics(ReducerInjector, WrappedComponent);
};
