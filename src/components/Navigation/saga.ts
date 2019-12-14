import { put, takeLatest, all } from 'redux-saga/effects';
import { LocationChangeAction } from 'connected-react-router';
import { actions } from './slice';

function* setSelectedNavItemSaga(action: LocationChangeAction) {
  yield put(actions.setItemSelected(action.payload.location.pathname));
}

function* setAdminItemsNavbarSaga(action: LocationChangeAction) {
  if (action.payload.location.pathname.includes('/admin')) {
    yield put(actions.setAdminNavItems());
  }
}
function* setCommonItemsNavbarSaga(action: LocationChangeAction) {
  if (action.payload.location.pathname === '/explore') {
    yield put(actions.setCommonNavItems());
  }
}


export function* navWatchSaga() {
  yield all([
    takeLatest('@@router/LOCATION_CHANGE', setAdminItemsNavbarSaga),
    takeLatest('@@router/LOCATION_CHANGE', setCommonItemsNavbarSaga),
    takeLatest('@@router/LOCATION_CHANGE', setSelectedNavItemSaga),
  ]);
}
