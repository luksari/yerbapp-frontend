import { connectRouter } from 'connected-react-router';
import { combineReducers, AnyAction, Reducer } from 'redux';
import { history } from '../utils';
import { reducer as authReducer } from './reducers/auth/slice';
import { FullStoreShape } from './types';


export default function createReducer(injectedReducers?: Record<string, Reducer<any, AnyAction>>) {
  return combineReducers<FullStoreShape>({
    router: connectRouter(history),
    auth: authReducer,
    ...injectedReducers,
  });
}
