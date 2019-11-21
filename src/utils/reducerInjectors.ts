
import invariant from 'invariant';
import { isEmpty, isFunction, isString } from 'lodash';
import { Reducer } from 'redux';
import createReducer from '../store/reducers';
import checkStore from './checkStore';

export function injectReducerFactory(store: any, isValid: boolean) {
  return function injectReducer(key: string, reducer: Reducer<object>) {
    if (!isValid) {
      checkStore(store);
    }

    invariant(
      isString(key) && !isEmpty(key) && isFunction(reducer),
      '(app/utils...) injectReducer: Expected `reducer` to be a reducer function',
    );

    // Check `store.injectedReducers[key] === reducer` for hot reloading when a key is the same but a reducer is different
    if (
      Reflect.has(store.injectedReducers, key)
      && store.injectedReducers[key] === reducer
    ) return;

    store.injectedReducers[key] = reducer; // eslint-disable-line no-param-reassign
    store.replaceReducer(createReducer(store.injectedReducers));
  };
}

export default function getInjectors(store: any) {
  console.warn('getInjectors store', store);
  checkStore(store);

  return {
    injectReducer: injectReducerFactory(store, true),
  };
}
