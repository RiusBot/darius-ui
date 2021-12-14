import { all, put, select, takeLatest } from 'redux-saga/effects';
import {
  getUserApi,
  getUserApiSuccess,
  createUserApi,
  createUserApiSuccess,
  deleteUserApi,
  deleteUserApiSuccess,
} from '@/features/api/api-slice';
import getAxios from '@/common/utils/getAxios';
import { getAuthUser } from '@/common/selectors';

function* getUserApiSaga({ payload: userInfo }) {
  const axios = yield getAxios();
  const auth = yield select(getAuthUser);
  const url = `/api/v1/get_user_api`;
  const requestMethod = 'GET';
  const params = {
    uid: auth.uid,
  }
  try {
    const res = yield axios(url, {
      method: requestMethod,
      params
    });
    yield put(getUserApiSuccess(res.data));
  } catch(error) {
    const errorMsg = 'Failed to get user API';
  }
}

function* createUserApiSaga({ payload: apiInfo }) {
  const axios = yield getAxios();
  const auth = yield select(getAuthUser);
  const url = `/api/v1/create_user_api`;
  const requestMethod = 'POST';
  const data = {
    uid: auth.uid,
    api_key: apiInfo.api.key,
    api_secret: apiInfo.api.secret,
    exchange: apiInfo.api.exchange,
    subaccount: apiInfo.api.subaccount,
  }
  try {
    const res = yield axios(url, {
      method: requestMethod,
      data
    });
    yield put(createUserApiSuccess(res.data));
  } catch(error) {
    const errorMsg = 'Failed to create user API';
  }
}

function* deleteUserApiSaga({ payload: apiInfo }) {
  const axios = yield getAxios();
  const auth = yield select(getAuthUser);
  const url = `/api/v1/delete_user_api`;
  const requestMethod = 'DELETE';
  const data = {
    uid: auth.uid,
    api_id: apiInfo.apiId,
  }
  try {
    const res = yield axios(url, {
      method: requestMethod,
      data
    });
    yield put(getUserApiSuccess(res.data));
  } catch(error) {
    const errorMsg = 'Failed to delete user API';
  }
}

function* apiSaga() {
  yield all([
    takeLatest(getUserApi.toString(), getUserApiSaga),
    takeLatest(createUserApi.toString(), createUserApiSaga),
    takeLatest(deleteUserApi.toString(), deleteUserApiSaga)
  ]);
}

export default apiSaga;
