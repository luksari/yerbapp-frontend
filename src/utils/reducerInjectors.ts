
import invariant from 'invariant';
import { isEmpty, isFunction, isString } from 'lodash';
import { Reducer } from 'redux';
import { LifeStore } from '../store/types';
import createReducer from '../store/reducers';

export function injectReducerFactory(store: LifeStore) {
  return function injectReducer(key: string, reducer: Reducer<object>) {
    invariant(
      isString(key) && !isEmpty(key) && isFunction(reducer),
      '(app/utils...) injectReducer: Expected `reducer` to be a reducer function',
    );
    if (Reflect.has(store.injectedReducers, key) && store.injectedReducers[key] === reducer) return;

    // eslint-disable-next-line no-param-reassign
    store.injectedReducers[key] = reducer;
    /** @todo fix typings or not */
    store.replaceReducer(createReducer(store.injectedReducers) as any);
  };
}

export default function getInjectors(store: LifeStore) {
  return {
    injectReducer: injectReducerFactory(store),
  };
}
