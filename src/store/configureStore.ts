import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { LifeStore } from './types';
import createReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

declare global {
  interface Window {
    // eslint-disable-next-line no-undef
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
export default function configureStore(initialState = {}, history: History): LifeStore {
  const middlewares = [sagaMiddleware, routerMiddleware(history)];
  const enhancers = [applyMiddleware(...middlewares)];
  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle, indent */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

  const store: LifeStore = createStore(
    createReducer(),
    { ...initialState },
    composeEnhancers(...enhancers),
  );
  // Extensions
  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {}; // Reducer registry
  store.injectedSagas = {}; // Saga registry

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducer(store.injectedReducers));
    });
  }
  return store;
}
