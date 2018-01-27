import {SUCCESS_FETCH_MESSAGES, FAIL_FETCH_MESSAGES} from './constants';

const initialMessages = {all: []};

const messagesReducer = (state = initialMessages, action) => {
  let newState;
  switch (action.type) {
    case SUCCESS_FETCH_MESSAGES:
      newState = {
        all: action.data
      };
      break;

    default:
      return state;
  }

  return Object.assign({}, state, newState);
};

export default messagesReducer;
