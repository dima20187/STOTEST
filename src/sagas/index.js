import { call, all } from 'redux-saga/effects';
import siteSaga from './siteSaga';

const allSagas = [
  ...siteSaga,
];

export default function* rootSaga() {
  yield all(allSagas.map((saga) => call(saga)));
}
