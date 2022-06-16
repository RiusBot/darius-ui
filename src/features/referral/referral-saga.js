import { all, put, select, takeLatest } from 'redux-saga/effects';
import {
  loadUserReferral,
  loadUserReferralSuccess,
  loadUserReferralHistory,
  loadUserReferralHistorySuccess,
  updateUserReferral,
} from '@/features/referral/referral-slice';
import { updateSnackbar } from '@/app/app-slice';
import getAxios from '@/common/utils/getAxios';
import { getAuthUser } from '@/common/selectors';

function* loadUserReferralSaga() {
  const axios = yield getAxios();
  const auth = yield select(getAuthUser);
  const url = `/api/v1/get_user_referral_info`;
  const requestMethod = 'GET';
  const params = {
    uid: auth.uid,
  }
  try {
    const res = yield axios(url, {
      method: requestMethod,
      params
    });
    res.data.referral_rebate_rate *= 100;
    res.data.referrer_rebate_rate *= 100;
    yield put(loadUserReferralSuccess(res.data));
  } catch({response}) {
    const errorMsg = 'Failed to get user referral info';
    yield put(updateSnackbar({ type: 'error', msg: `${errorMsg} with error: ${response.data.message}` }));
  }
}

function* loadUserReferralHistorySaga({ payload: referralInfo }) {
  const axios = yield getAxios();
  const auth = yield select(getAuthUser);
  const url = `/api/v1/get_user_referral_history`;
  const requestMethod = 'GET';
  const params = {
    uid: auth.uid,
    page: referralInfo.page,
    pagesize: referralInfo.pagesize,
  }
  try {
    const res = yield axios(url, {
      method: requestMethod,
      params
    });
    yield put(loadUserReferralHistorySuccess(res.data));
  } catch({response}) {
    const errorMsg = 'Failed to get user referral history';
    yield put(updateSnackbar({ type: 'error', msg: `${errorMsg} with error: ${response.data.message}` }));
  }
}

function* updateUserReferralSaga({ payload: referralInfo }) {
  const axios = yield getAxios();
  const auth = yield select(getAuthUser);
  const url = `/api/v1/update_user_referral_info`;
  const requestMethod = 'PATCH';
  const data = {
    uid: auth.uid,
    referral_rebate_rate: referralInfo.referral_rebate_rate / 100,
    referrer_rebate_rate: referralInfo.referrer_rebate_rate / 100,
  }
  try {
    const res = yield axios(url, {
      method: requestMethod,
      data
    });
    yield put(loadUserReferral());
    yield put(updateSnackbar({ type: 'success', msg: `Update Referral Success` }));
  } catch({response}) { 
    const errorMsg = 'Failed to update user referral info';
    yield put(updateSnackbar({ type: 'error', msg: `${errorMsg} with error: ${response.data.message}` }));
  }
}

function* referralSaga() {
  yield all([
    takeLatest(loadUserReferral.toString(), loadUserReferralSaga),
    takeLatest(loadUserReferralHistory.toString(), loadUserReferralHistorySaga),
    takeLatest(updateUserReferral.toString(), updateUserReferralSaga)
  ]);
}

export default referralSaga;
