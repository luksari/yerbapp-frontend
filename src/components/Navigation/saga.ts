import { put, takeLatest } from 'redux-saga/effects';
import { LocationChangeAction } from 'connected-react-router';
import { actions } from './slice';

function* setSelectedNavItemSaga(action: LocationChangeAction) {
  yield put(actions.setItemSelected(action.payload.location.pathname));
}

export function* navWatchSaga() {
  yield takeLatest('@@router/LOCATION_CHANGE', setSelectedNavItemSaga);
}
