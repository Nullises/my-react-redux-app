import * as types from "../actions/actionTypes";
export default function courseReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      //Copy the state into a new state and adds update for course
      return [...state, { ...action.course }];
    default:
      return state;
  }
}
