import { all, put, select, takeLatest } from 'redux-saga/effects';
import {
  loadUserNotify,
  loadUserNotifySuccess,
  updateUserNotify,
} from '@/features/notify/notify-slice';
import { updateSnackbar } from '@/app/app-slice';
import getAxios from '@/common/utils/getAxios';
import { getAuthUser } from '@/common/selectors';

function* loadUserNotifySaga() {
  const axios = yield getAxios();
  const auth = yield select(getAuthUser);
  const url = `/api/v1/get_user_notify`;
  const requestMethod = 'GET';
  const params = {
    uid: auth.uid,
  }
  try {
    const res = yield axios(url, {
      method: requestMethod,
      params
    });
    yield put(loadUserNotifySuccess(res.data));
  } catch({response}) {
    const errorMsg = 'Failed to get user notify config'
    yield put(updateSnackbar({ type: 'error', msg: `${errorMsg} with error: ${response.data.message}` }));
  }
}

function* updateUserNotifySaga({ payload: notifyConfig }) {
  const axios = yield getAxios();
  const auth = yield select(getAuthUser);
  const url = `/api/v1/update_user_notify`;
  const requestMethod = 'PATCH';
  const data = {
    uid: auth.uid,
    config: notifyConfig,
  }
  try {
    const res = yield axios(url, {
      method: requestMethod,
      data
    });
    yield put(loadUserNotify());
    yield put(updateSnackbar({ type: 'success', msg: `Update Notify Success` }));
  } catch({response}) { 
    const errorMsg = 'Failed to update user notify config';
    yield put(updateSnackbar({ type: 'error', msg: `${errorMsg} with error: ${response.data.message}` }));
  }
}

function* notifySaga() {
  yield all([
    takeLatest(loadUserNotify.toString(), loadUserNotifySaga),
    takeLatest(updateUserNotify.toString(), updateUserNotifySaga),
  ]);
}

export default notifySaga;
