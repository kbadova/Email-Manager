import {takeLatest} from 'redux-saga/effects';

import {fetchMessageWorker} from './workers';

import {FETCH_MESSAGE} from './constants';

function* messageSaga() {
  yield takeLatest(FETCH_MESSAGE, fetchMessageWorker);
}

export default messageSaga;
