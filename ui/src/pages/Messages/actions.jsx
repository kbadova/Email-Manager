import {
  SUCCESS_FETCH_MESSAGES,
  FAIL_FETCH_MESSAGES,
  FETCH_MESSAGES
} from './constants';

export const successFetchMessage = data => {
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

export const fetchMessages = () => {
  return {
    type: FETCH_MESSAGES
  };
};
