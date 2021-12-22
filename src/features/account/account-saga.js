import { all, put, select, takeLatest } from 'redux-saga/effects';
import {
  createUser,
  createUserSussess,
} from '@/app/app-slice';
import { updateSnackbar } from '@/app/app-slice';
import getAxios from '@/common/utils/getAxios';
import { getAuthUser } from '@/common/selectors';

function* createUserSaga() {
  const axios = yield getAxios();
  const auth = yield select(getAuthUser);
  const data = {
    uid: auth.uid,
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
  } catch({response}) {
    const errorMsg = 'Failed to create user';
    yield put(updateSnackbar({ type: 'error', msg: `${errorMsg} with error: ${response.data.message}` }));
  }
};

function* accountSaga() {
  yield all([
    takeLatest(createUser.toString(), createUserSaga),
  ]);
}

export default accountSaga;
