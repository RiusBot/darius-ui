import { all, put, select, takeLatest } from 'redux-saga/effects';
import {
  createUser,
  createUserSuccess,
  createRecaptchaAccessment,
  createRecaptchaAccessmentSuccess,
  loadUserProfile,
  loadUserProfileSuccess,
  updateUserProfile,
  loadUserTelegram,
  loadUserTelegramSuccess,
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
      yield put(createUserSuccess());
      yield put(updateSnackbar({ type: 'success', msg: `Create User Success` }));
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
      yield put(createRecaptchaAccessmentSuccess());
    }
  } catch({response}) {
    const errorMsg = 'Failed to create recaptcha assessment';
  }
};

function* loadUserProfileSaga() {
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
      yield put(loadUserProfileSuccess(res.data));
    } 
  } catch({ response }) {
    const errorMsg = 'Failed to get user profile';
    yield put(updateSnackbar({ type: 'error', msg: `${errorMsg} with error: ${response.data.message}` }));
  }
}

function* updateUserProfileSaga({ payload }) {
  const axios = yield getAxios();
  const auth = yield select(getAuthUser);
  const data = {
    uid: auth.uid,
    user_name: payload.username,
    referrer: payload.referrer
  }
  const url = `/api/v1/update_user_profile`;
  const requestMethod = 'PATCH';
  try {
    const res = yield axios(url, {
      method: requestMethod,
      data,
    });
    if (res.status === 200) {
      yield put(loadUserProfile());
      yield put(updateSnackbar({ type: 'success', msg: `Update User Profile Success` }));
    }
  } catch ({ response }) {
    const errorMsg = 'Failed to update user profile';
    yield put(updateSnackbar({ type: 'error', msg:`${errorMsg} with error: ${response.data.message}`}));
  }
}

function* loadUserTelegramSaga() {
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
      yield put(loadUserTelegramSuccess(res.data));
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
    takeLatest(loadUserProfile.toString(), loadUserProfileSaga),
    takeLatest(updateUserProfile.toString(), updateUserProfileSaga),
    takeLatest(loadUserTelegram.toString(), loadUserTelegramSaga),
  ]);
}

export default accountSaga;
