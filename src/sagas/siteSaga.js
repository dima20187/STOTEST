import { put, takeLatest, select, call } from 'redux-saga/effects';
import * as siteActions from '../actions/siteActions';

const apiKey = '4ecef7e0abcb8da19882bf5bbd0d55ce';

function* loadSiteSaga({ payload }) {
  try {
    const siteResponse = yield fetch(`https://api.themoviedb.org/3/movie/76341?api_key=${apiKey}`);
    const response = yield siteResponse.json();
    console.log(response);
    yield put(siteActions.loadSiteSuccess(response));
  } catch (err) {
    yield put(siteActions.loadSiteFailed(err));
  }
}

export function* watchLoadSite() {
  yield takeLatest(siteActions.LOAD_SITE, loadSiteSaga);
}

export default [
  watchLoadSite,
];
