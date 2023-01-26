import * as actions from "./actionTypes";

export const add = (text) => ({
  type: actions.ADD,
  payload: text,
});

export const remove = (id) => ({
  type: actions.REMOVE,
  payload: id,
});

export const request = () => ({
  type: actions.USER_FETCH_REQUESTED,
});

export const success = (name) => ({
  type: actions.USER_FETCH_SUCCEEDED,
  payload: name,
});

export const error = (massage) => ({
  type: actions.USER_FETCH_FAILED,
  payload: massage,
});
