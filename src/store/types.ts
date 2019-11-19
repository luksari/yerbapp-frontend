import {
  Store, Action, AnyAction, Reducer,
} from 'redux';
import { RouterState } from 'connected-react-router';
import { Saga } from 'redux-saga';

export interface AppStore extends Store<{}> {
  injectedReducers: Record<string, Reducer<any, AnyAction>>;
  injectedSagas: Record<string, any>;
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
