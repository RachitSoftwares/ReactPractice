import { takeLatest,takeEvery } from "redux-saga/effects";
import { userListSaga } from "../sagas/user/userListSaga";
import { getUserListRequest } from "../store/slice/user";

function* rootSaga() {
  yield takeLatest(getUserListRequest, userListSaga);
}
export default rootSaga;
