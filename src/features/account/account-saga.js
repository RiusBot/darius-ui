import { all, put, select, takeLatest } from 'redux-saga/effects';
import {
  updateUserInfo,
  updateUserInfoSuccess
} from '@/app/app-slice';
import getAxios from '@/common/utils/getAxios';

function* updateUserSaga({ payload: newUserInfo }) {
  const axios = yield getAxios();
  const data = { 
    user_id: newUserInfo.userId,
    user_name: newUserInfo.userName,
    email: newUserInfo.email
  };
  const url = `/api/v1/update_user_profile`;
  const requestMethod = 'PATCH';
  try {
    const res = yield axios(url, {
      method: requestMethod,
      data,
    });
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
