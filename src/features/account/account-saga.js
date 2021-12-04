import { all, put, select, takeLatest } from 'redux-saga/effects';
import {
  createUser,
  createUserSussess,
  updateUserInfo,
  updateUserInfoSuccess
} from '@/app/app-slice';
import getAxios from '@/common/utils/getAxios';
import { getUserAuth } from '@/common/selectors';

function* updateUserSaga({ payload: newUserInfo }) {
  const axios = yield getAxios();
  const data = { 
    user_id: newUserInfo.userId,
    user_name: newUserInfo.username,
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
    const errorMsg = 'Failed to update user info';
  }
};

function* createUserSaga() {
  const axios = yield getAxios();
  const userAuth = yield select(getUserAuth);
  const data = {
    uid: userAuth.uid,
  }
  const url = `/api/v1/create_user`;
  const requestMethod = 'POST';
  try {
    const res = yield axios(url, {
      method: requestMethod,
      data,
    });
    if (res.status === 200) {
      yield put(createUserSussess())
    }
  } catch(error) {
    const errorMsg = 'Failed to create user';
  }
};

function* accountSaga() {
  yield all([
    takeLatest(updateUserInfo.toString(), updateUserSaga),
    takeLatest(createUser.toString(), createUserSaga),
  ]);
}

export default accountSaga;
