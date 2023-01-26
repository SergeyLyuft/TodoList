import { call, put, takeEvery } from "redux-saga/effects";
import { success, error } from "./redux/actions";

function* worker() {
  try {
    const data = yield call(fetchUser);
    yield put(success(data.data.user.name));
  } catch (e) {
    yield put(error(e.message));
  }
}

function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", worker);
}

async function fetchUser() {
  const id = Math.floor(Math.random() * 10);
  const response = await fetch("https://graphqlzero.almansi.me/api", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      query: `{
        user(id: ${id}) {
          name
        }
      }`,
    }),
  });
  return await response.json();
}

export default mySaga;
