import { all, fork, call, put, take } from "redux-saga/effects";
import axios from "axios";

function logInAPI() {
  return axios.post("/api/login");
}

function* logIn() {
  try {
    const result = yield call(logInAPI);
    yield put({
      type: "LOG_IN_SUCCESS",
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: "LOG_IN_FAILURE",
      data: error.response.data,
    });
  }
}

function* watchLogIn() {
  yield take("LOG_IN_REQUEST", logIn);
}

function* watchLogOut() {
  yield take("LOG_OUT_REQUEST");
}

function* watchAddPost() {
  yield take("ADD_POST_REQUEST");
}

export default function* rootSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut), fork(watchAddPost)]);
}