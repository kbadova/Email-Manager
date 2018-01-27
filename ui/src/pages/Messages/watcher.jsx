import {takeLatest} from 'redux-saga/effects';

import {fetchMessagesWorker} from './workers';

import {FETCH_MESSAGES} from './constants';

function* coursesSaga() {
  yield takeLatest(FETCH_MESSAGES, fetchMessagesWorker);
}

export default coursesSaga;
