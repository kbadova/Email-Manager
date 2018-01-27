import {fork, all} from 'redux-saga/effects';
import coursesSaga from './pages/NewMessage/watcher';

const sagas = [coursesSaga];

function* globalSagas() {
  const globalSagasForks = sagas.map(saga => fork(saga));

  yield all([...globalSagasForks]);
}

export default globalSagas;
