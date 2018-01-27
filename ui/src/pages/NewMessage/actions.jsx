import {
  FETCH_COURSES,
  SUCCESS_FETCH_COURSES,
  SEND_MESSAGE,
  SUCCESS_SEND_MESSAGE
} from './constants';

export const fetchCourses = () => {
  return {
    type: FETCH_COURSES
  };
};

export const successFetchCourses = data => {
  return {
    type: SUCCESS_FETCH_COURSES,
    data: data
  };
};

export const sendMessage = data => {
  return {
    type: SEND_MESSAGE,
    data: data
  };
};

export const successSendMessage = data => {
  return {
    type: SUCCESS_SEND_MESSAGE,
    data: data
  };
};
