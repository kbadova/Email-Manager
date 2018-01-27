import axios from 'axios';
import {call, put} from 'redux-saga/effects';

import {successFetchMessage} from './actions';

function* fetchMessagesWorker(action) {
  try {
    const response = yield call(axios.get, 'http://localhost:8000/messages');

    yield put(successFetchMessage(response.data));
  } catch (error) {
    console.log(error);
  }
}
export {fetchMessagesWorker};
