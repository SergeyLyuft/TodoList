import * as actions from "./actionTypes";

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.USER_FETCH_SUCCEEDED:
      return [action.payload];
    case actions.USER_FETCH_FAILED:
      return [action.payload];
    default:
      return state;
  }
}
