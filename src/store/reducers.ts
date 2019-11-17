import { connectRouter } from 'connected-react-router';
import { combineReducers, AnyAction, Reducer } from 'redux';
import { history } from '../utils';


export default function createReducer(injectedReducers?: Record<string, Reducer<any, AnyAction>>) {
  return combineReducers({
    router: connectRouter(history),
    ...injectedReducers,
  });
}
