import React from 'react';
import ReactDom from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {routerMiddleware} from 'react-router-redux';
import globalSagas from './global-saga';
import createSagaMiddleware from 'redux-saga';

import routes from 'routes';
import reducers from 'modules';
import history from './history';

const routerMid = routerMiddleware(history);

const sagaMiddleware = createSagaMiddleware();

let middleware = [sagaMiddleware, routerMid];

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
);

sagaMiddleware.run(globalSagas);

ReactDom.render(
  <Provider store={store}>
    <div>{routes()}</div>
  </Provider>,
  document.getElementById('root')
);
