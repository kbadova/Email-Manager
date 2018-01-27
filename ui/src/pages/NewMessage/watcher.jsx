import {takeLatest} from 'redux-saga/effects';

import {fetchCoursesWorker} from './workers';

import {FETCH_COURSES} from './constants';

function* coursesSaga() {
  yield takeLatest(FETCH_COURSES, fetchCoursesWorker);
}

export default coursesSaga;
