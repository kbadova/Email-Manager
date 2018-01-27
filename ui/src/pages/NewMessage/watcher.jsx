import {takeLatest} from 'redux-saga/effects';

import {fetchCoursesWorker, sendMessageWorker} from './workers';

import {FETCH_COURSES, SEND_MESSAGE} from './constants';

function* coursesSaga() {
  yield takeLatest(FETCH_COURSES, fetchCoursesWorker);
  yield takeLatest(SEND_MESSAGE, sendMessageWorker);
}

export default coursesSaga;
