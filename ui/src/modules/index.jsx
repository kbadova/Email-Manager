import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import messagesReducer from '../pages/Messages/reducer';
import newMessageReducer from '../pages/NewMessage/reducer';
import fetchMessageReducer from '../pages/ViewMessage/reducer';

const allReducers = combineReducers({
  messages: messagesReducer,
  newMessage: newMessageReducer,
  fetchMessage: fetchMessageReducer,
  router: routerReducer
});

export default allReducers;
