import {fork, all} from 'redux-saga/effects';
import messagesSaga from './pages/Messages/watcher';
import coursesSaga from './pages/NewMessage/watcher';

const sagas = [coursesSaga, messagesSaga];

function* globalSagas() {
  const globalSagasForks = sagas.map(saga => fork(saga));

  yield all([...globalSagasForks]);
}

export default globalSagas;
