import {SUCCESS_FETCH_COURSES} from './constants';

const initialCourses = {courses: []};

const newMessageReducer = (state = {initialCourses}, action) => {
  let newState;
  switch (action.type) {
    case SUCCESS_FETCH_COURSES:
      newState = {
        courses: action.data
      };
      break;
    default:
      return state;
  }

  return Object.assign({}, state, newState);
};

export default newMessageReducer;
