import * as types from "./actionTypes";
import * as authorApi from "../../api/authorApi";

export function loadAuthorSuccess(authors) {
  return {
    type: types.LOAD_AUTHORS_SUCCESS,
    authors,
  };
}

// My LoadAuthors Thunk
export function loadAuthors() {
  // Redux thunk uses the dispatch for me
  return function (dispatch) {
    // Call to my API
    return authorApi
      .getAuthors()
      .then((authors) => {
        // Here call my action
        dispatch(loadAuthorSuccess(authors));
      })
      .catch((error) => {
        throw error;
      });
  };
}