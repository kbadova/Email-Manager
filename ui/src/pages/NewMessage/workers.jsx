import axios from 'axios';
import {call, put} from 'redux-saga/effects';

import {successFetchCourses, successSendMessage} from './actions';

function* fetchCoursesWorker(action) {
  try {
    const response = yield call(axios.get, 'http://localhost:8000/courses');

    yield put(successFetchCourses(response.data));
  } catch (error) {
    console.log(error);
  }
}

function* sendMessageWorker(action) {
  try {
    const response = yield call(
      axios.post,
      'http://localhost:8000/send-message',
      action.data
    );

    yield put(successSendMessage(response.data));
  } catch (error) {
    console.log(error);
  }
}
export {fetchCoursesWorker, sendMessageWorker};
