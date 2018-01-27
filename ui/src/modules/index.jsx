import {combineReducers} from 'redux';

import messagesReducer from '../pages/Messages/reducer';

import newMessageReducer from '../pages/NewMessage/reducer';

const allReducers = combineReducers({
  messages: messagesReducer,
  newMessage: newMessageReducer
});

export default allReducers;
