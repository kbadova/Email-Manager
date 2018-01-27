import {SUCCESS_FETCH_MESSAGE} from './constants';

const initialMessage = {message: null};

const fetchMessageReducer = (state = {initialMessage}, action) => {
  let newState;
  switch (action.type) {
    case SUCCESS_FETCH_MESSAGE:
      console.log('in reducer', action.data);
      newState = {
        message: action.data
      };
      break;
    default:
      return state;
  }

  return Object.assign({}, state, newState);
};

export default fetchMessageReducer;
