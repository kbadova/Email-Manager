import {SUCCESS_FETCH_MESSAGES, FAIL_FETCH_MESSAGES} from './constants';

export const successFetchMessages = data => {
  return {
    type: SUCCESS_FETCH_MESSAGES,
    data
  };
};

export const failFetchMessages = errors => {
  return {
    type: FAIL_FETCH_MESSAGES,
    errors
  };
};
