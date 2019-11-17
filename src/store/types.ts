import {
  Store, Action, AnyAction, Reducer,
} from 'redux';
import { RouterState } from 'connected-react-router';

export interface AppStore extends Store<{}> {
  injectedReducers: Record<string, Reducer<any, AnyAction>>;
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
