import {FETCH_MESSAGE, SUCCESS_FETCH_MESSAGE} from './constants';

export const fetchMessage = data => {
  return {
    type: FETCH_MESSAGE,
    data
  };
};

export const successFetchMessage = data => {
  return {
    type: SUCCESS_FETCH_MESSAGE,
    data
  };
};
