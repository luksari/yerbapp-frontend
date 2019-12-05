import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { history } from 'utils/history';
import { reducer as authReducer } from 'store/auth/slice';
import { FullStoreShape } from './types';


export default function createReducer(injectedReducers = {}) {
  return combineReducers<FullStoreShape>({
    router: connectRouter(history),
    auth: authReducer,
    ...injectedReducers,
  });
}
