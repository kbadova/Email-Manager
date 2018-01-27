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
    const data = Object.assign({}, action.data, {
      send_from: localStorage.getItem('email')
    });
    const response = yield call(
      axios.post,
      'http://localhost:8000/create-message/',
      data
    );
    if (response.data.completed) {
      alert('Your message was sent successfully');
    }

    yield put(successSendMessage(response.data));
  } catch (error) {
    console.log(error);
  }
}
export {fetchCoursesWorker, sendMessageWorker};
