import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { history } from 'utils/history';
import { FullStoreShape } from './types';


export default function createReducer(injectedReducers = {}) {
  return combineReducers<FullStoreShape>({
    router: connectRouter(history),
    ...injectedReducers,
  });
}
