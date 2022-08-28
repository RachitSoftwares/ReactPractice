import { call, put, delay, select,putResolve } from "redux-saga/effects";
import {
  setUserList,
  getUserListRequestSuccess,
  getUserListRequestFailure,
} from "../../store/slice/user";
import { getAPICall } from "../../API/index";
const getList = (state) => state.user.users
export function* userListSaga() {
  try {
    yield putResolve(setUserList([]));
    const response = yield call(getAPICall);
    yield delay(1000)
    if (response.data) {
      yield put(setUserList(response.data));
      yield put(getUserListRequestSuccess());
      const list = yield select(getList);
      console.log("response", response);
      console.log("list", list);
    }

  } catch (error) {
    yield put(getUserListRequestFailure());
  }
}
