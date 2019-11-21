
import invariant from 'invariant';
import { isEmpty, isFunction, isString } from 'lodash';
import { Reducer } from 'redux';
import { LifeStore } from '../store/types';
import createReducer from '../store/reducers';
import checkStore from './checkStore';

export function injectReducerFactory(store: LifeStore, isValid: boolean) {
  return function injectReducer(key: string, reducer: Reducer<object>) {
    console.warn(store);
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

export default function getInjectors(store: LifeStore) {
  checkStore(store);
  return {
    injectReducer: injectReducerFactory(store, true),
  };
}
