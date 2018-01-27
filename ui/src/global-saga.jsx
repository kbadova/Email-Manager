import {fork, all} from 'redux-saga/effects';
import messagesSaga from './pages/Messages/watcher';
import coursesSaga from './pages/NewMessage/watcher';
import messageSaga from './pages/ViewMessage/watcher';

const sagas = [coursesSaga, messagesSaga, messageSaga];

function* globalSagas() {
  const globalSagasForks = sagas.map(saga => fork(saga));

  yield all([...globalSagasForks]);
}

export default globalSagas;
