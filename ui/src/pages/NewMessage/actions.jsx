import {FETCH_COURSES, SUCCESS_FETCH_COURSES} from './constants';

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
