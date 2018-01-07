import {combineReducers} from 'redux';

import messagesReducer from '../pages/Messages/reducer';

const allReducers = combineReducers({messages: messagesReducer});

export default allReducers;
