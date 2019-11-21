import {
  Action, Store,
} from 'redux';
import { RouterState } from 'connected-react-router';
import { AuthState } from './auth/slice';

export interface LifeStore extends Store<FullStoreShape> {
  injectedReducers?: any;
  injectedSagas?: any;
  runSaga: any;
}

export interface FullStoreShape {
  router: RouterState;
  auth: AuthState;
  [key: string]: any;
}

export interface InjectReducerParams {
  key: string;
  reducer: (state: any, action: Action) => any;
}

export interface ReduxState {
  route: RouterState;
  global: object;
  [propName: string]: any;
}

export enum SagaMode {
  RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount',
  DAEMON = '@@saga-injector/daemon',
  ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount',
}

export interface SagaConfig {
  key: string;
  saga: Function;
  mode?: SagaMode;
}

export interface DescriptorModel {
  saga: Function;
  mode?: SagaMode;
}
