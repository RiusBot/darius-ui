import { all, put, select, takeLatest } from 'redux-saga/effects';
import {
  createUser,
  createUserSuccess,
  createRecaptchaAccessment,
  createRecaptchaAccessmentSuccess,
  getUserProfile,
  getUserProfileSuccess,
  getUserTelegram,
  getUserTelegramSuccess,
} from '@/app/app-slice';
import { updateSnackbar } from '@/app/app-slice';
import getAxios from '@/common/utils/getAxios';
import { getAuthUser } from '@/common/selectors';

function* createUserSaga({ payload: { referrer } }) {
  const axios = yield getAxios();
  const auth = yield select(getAuthUser);
  const data = {
    uid: auth.uid,
    referrer,
  }
  const url = `/api/v1/create_user`;
  const requestMethod = 'POST';
  try {
    const res = yield axios(url, {
      method: requestMethod,
      data,
    });
    if (res.status === 200) {
      yield put(createUserSuccess())
    }
  } catch({response}) {
    const errorMsg = 'Failed to create user';
    yield put(updateSnackbar({ type: 'error', msg: `${errorMsg} with error: ${response.data.message}` }));
  }
};

function* createRecaptchaAccessmentSaga({ payload: { token, action } }) {
  const axios = yield getAxios();
  const data = {
    token,
    action,
  }
  const url = `/api/v1/recaptcha_assessment`;
  const requestMethod = 'POST';
  try {
    const res = yield axios(url, {
      method: requestMethod,
      data,
    });
    if (res.status === 200) {
      yield put(createRecaptchaAccessmentSuccess())
    }
  } catch({response}) {
    const errorMsg = 'Failed to create recaptcha assessment';
  }
};

function* getUserProfileSaga() {
  const axios = yield getAxios();
  const auth = yield select(getAuthUser);
  const params = {
    uid: auth.uid
  }
  const url = `/api/v1/get_user_profile`;
  const requestMethod = 'GET';
  try {
    const res = yield axios(url, {
      method: requestMethod,
      params,
    });
    if (res.status === 200) {
      yield put(getUserProfileSuccess(res.data));
    } 
  } catch({ response }) {
    const errorMsg = 'Failed to get user profile';
    yield put(updateSnackbar({ type: 'error', msg: `${errorMsg} with error: ${response.data.message}` }));
  }
}

function* getUserTelegramSaga() {
  const axios = yield getAxios();
  const auth = yield select(getAuthUser);
  const params = {
    uid: auth.uid
  }
  const url = `/api/v1/get_user_telegram`;
  const requestMethod = 'GET';
  try {
    const res = yield axios(url, {
      method: requestMethod,
      params,
    });
    if (res.status === 200) {
      yield put(getUserTelegramSuccess(res.data));
    }
  } catch({ response }) {
    const errorMsg = 'Failed to get user telegram';
    yield put(updateSnackbar({ type: 'error', msg: `${errorMsg} with error: ${response.data.message}`}));
  }
}

function* accountSaga() {
  yield all([
    takeLatest(createUser.toString(), createUserSaga),
    takeLatest(createRecaptchaAccessment.toString(), createRecaptchaAccessmentSaga),
    takeLatest(getUserProfile.toString(), getUserProfileSaga),
    takeLatest(getUserTelegram.toString(), getUserTelegramSaga),
  ]);
}

export default accountSaga;
