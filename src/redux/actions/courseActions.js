import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";

export function createCourse(course) {
  return {
    type: types.CREATE_COURSE,
    course,
  };
}

export function loadCourseSuccess(courses) {
  return {
    type: types.LOAD_COURSES_SUCCESS,
    courses: courses,
  };
}

// My LoadCourses Thunk
export function loadCourses() {
  // Redux thunk uses the dispatch for me
  return function (dispatch) {
    // Call to my API
    return courseApi
      .getCourses()
      .then((courses) => {
        // Here call my action
        dispatch(loadCourseSuccess(courses));
      })
      .catch((error) => {
        throw error;
      });
  };
}
