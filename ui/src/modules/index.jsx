import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import messagesReducer from '../pages/Messages/reducer';

import newMessageReducer from '../pages/NewMessage/reducer';

const allReducers = combineReducers({
  messages: messagesReducer,
  newMessage: newMessageReducer,
  router: routerReducer
});

export default allReducers;
