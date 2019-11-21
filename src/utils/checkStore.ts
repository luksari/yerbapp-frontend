import { conformsTo, isFunction, isObject } from 'lodash';
import invariant from 'invariant';
import { LifeStore } from '../store/types';

/**
 * Validate the shape of redux store
 */
export default function checkStore(store: any) {
  const shape = {
    dispatch: isFunction,
    getState: isFunction,
    injectedReducers: isObject,
    injectedSagas: isObject,
    liftedStore: isObject,
    replaceReducer: isFunction,
    runSaga: isFunction,
    subscribe: isFunction,
    //     dispatch: ƒ ()
    // getState: ƒ f()
    // injectedReducers: {}
    // injectedSagas: {}
    // liftedStore: {dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, Symbol(observable): ƒ}
    // replaceReducer: ƒ (n)
    // runSaga: ƒ ()
    // subscribe: ƒ subscribe(listener)
    // Symbol(observable): ƒ ()
  };
  invariant(
    conformsTo(store, shape),
    '(app/utils...) injectors: Expected a valid redux store',
  );
}
