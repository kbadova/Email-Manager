import axios from 'axios';
import {call, put} from 'redux-saga/effects';

import {successFetchCourses} from './actions';

function* fetchCoursesWorker(action) {
  try {
    const response = yield call(axios.get, 'http://localhost:8000/courses');

    yield put(successFetchCourses(response.data));
  } catch (error) {
    console.log(error);
  }
}

export {fetchCoursesWorker};
