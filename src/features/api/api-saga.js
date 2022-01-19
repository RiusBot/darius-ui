import { all, put, select, takeLatest } from 'redux-saga/effects';
import {
  loadUserApi,
  loadUserApiSuccess,
  createUserApi,
  deleteUserApi,
} from '@/features/api/api-slice';
import { updateSnackbar } from '@/app/app-slice';
import getAxios from '@/common/utils/getAxios';
import { getAuthUser } from '@/common/selectors';

function* loadUserApiSaga() {
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
    yield put(loadUserApiSuccess(res.data));
  } catch({response}) {
    const errorMsg = 'Failed to get user API';
    yield put(updateSnackbar({ type: 'error', msg: `${errorMsg} with error: ${response.data.message}` }));
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
    yield put(loadUserApi());
  } catch({response}) { 
    const errorMsg = 'Failed to create user API';
    yield put(updateSnackbar({ type: 'error', msg: `${errorMsg} with error: ${response.data.message}` }));
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
    yield put(loadUserApi());
  } catch({response}) {
    const errorMsg = 'Failed to delete user API';
    yield put(updateSnackbar({ type: 'error', msg: `${errorMsg} with error: ${response.data.message}` }));
  }
}

function* apiSaga() {
  yield all([
    takeLatest(loadUserApi.toString(), loadUserApiSaga),
    takeLatest(createUserApi.toString(), createUserApiSaga),
    takeLatest(deleteUserApi.toString(), deleteUserApiSaga)
  ]);
}

export default apiSaga;
