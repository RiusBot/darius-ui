import { all, put, select, takeLatest } from 'redux-saga/effects';
import {
  updateUserInfo,
  updateUserInfoSuccess
} from '@/app/app-slice';
import getAxios from '@/common/utils/getAxios';

function* updateUserSaga({ payload: newUserInfo }) {
  const axios = yield getAxios();
  const { userId } = newUserInfo;
  const data = { ...newUserInfo };
  const url = `/v1/user_management/users/${userId}`;
  const requestMethod = 'PATCH';
  try {
    /*
    const res = yield axios(url, {
      method: requestMethod,
      data,
    });
    */
    yield put(updateUserInfoSuccess(newUserInfo));
  } catch(error) {
    const errorMsg = 'Failed to update the user info';
  }
};

function* accountSaga() {
  yield all([
    takeLatest(updateUserInfo.toString(), updateUserSaga),
  ]);
}

export default accountSaga;
