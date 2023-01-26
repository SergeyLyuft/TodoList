import * as actions from "./actionTypes";

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.ADD:
      return [
        ...state,
        {
          id: Date.now().toString(),
          text: action.payload,
        },
      ];
    case actions.REMOVE:
      return state.filter((el) => el.id !== action.payload);
    default:
      return state;
  }
}
