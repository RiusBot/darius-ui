import { all, put, select, takeLatest } from 'redux-saga/effects';
import {
  loadAllPlan,
  loadAllPlanSuccess,
  loadPlanByID,
  loadPlanByIDSuccess,
  loadUserSubscription,
  loadUserSubscriptionSuccess,
  loadSubscriptionInfo,
  loadSubscriptionInfoSuccess,
  createUserSubscription,
} from '@/features/subscription/subscription-slice';
import { updateSnackbar } from '@/app/app-slice';
import getAxios from '@/common/utils/getAxios';
import { getAuthUser } from '@/common/selectors';
import { analytics, generateTransactionId } from '@/utils/firebase';

function* loadAllPlanSaga() {
  const axios = yield getAxios();
  const auth = yield select(getAuthUser);
  const url = `/api/v1/get_plan`;
  const requestMethod = 'GET';
  const params = {
    uid: auth.uid,
  }
  try {
    const res = yield axios(url, {
      method: requestMethod,
      params
    });
    yield put(loadAllPlanSuccess(res.data));
  } catch({response}) {
    const errorMsg = 'Failed to get plans'
    yield put(updateSnackbar({ type: 'error', msg: `${errorMsg} with error: ${response.data.message}` }));
  }
}

function* loadPlanByIDSaga({ payload: planId }) {
  const axios = yield getAxios();
  const auth = yield select(getAuthUser);
  const url = `/api/v1/get_plan`;
  const requestMethod = 'GET';
  const params = {
    uid: auth.uid,
    plan_id: planId,
  }
  try {
    const res = yield axios(url, {
      method: requestMethod,
      params
    });
    yield put(loadPlanByIDSuccess(res.data));
  } catch({response}) {
    const errorMsg = 'Failed to get plan';
    yield put(updateSnackbar({ type: 'error', msg: `${errorMsg} with error: ${response.data.message}` }));
  }
}

function* loadUserSubscriptionSaga() {
  const axios = yield getAxios();
  const auth = yield select(getAuthUser);
  const url = `/api/v1/get_user_subscription`;
  const requestMethod = 'GET';
  const params = {
    uid: auth.uid,
  }
  try {
    const res = yield axios(url, {
      method: requestMethod,
      params,
    });
    yield put(loadUserSubscriptionSuccess(res.data));
  } catch({response}) {
    const errorMsg = 'Failed to get user subscriptions.';
    yield put(updateSnackbar({ type: 'error', msg: `${errorMsg} with error: ${response.data.message}` }));
  }
}

function* loadSubscriptionInfoSaga({payload: channel}) {
  const axios = yield getAxios();
  const auth = yield select(getAuthUser);
  const url = `/api/v1/get_subscription_info/${channel}`;
  const requestMethod = 'GET';
  const params = {
    uid: auth.uid,
  }
  try {
    const res = yield axios(url, {
      method: requestMethod,
      params,
    });
    yield put(loadSubscriptionInfoSuccess({channel: channel, data: res.data}));
  } catch({response}) {
    const errorMsg = 'Failed to get subscriptions info.';
    yield put(updateSnackbar({ type: 'error', msg: `${errorMsg} with error: ${response.data.message}` }));
  }
}

function* createUserSubscriptionSaga({ payload: { planId, price }}) {
  const axios = yield getAxios();
  const auth = yield select(getAuthUser);
  const url = `/api/v1/create_user_subscription`;
  const requestMethod = 'POST';
  const data = {
    uid: auth.uid,
    plan_id: planId,
  }
  try {
    const res = yield axios(url, {
      method: requestMethod,
      data,
    });
    yield put(loadUserSubscription());
    yield put(updateSnackbar({ type: 'success', msg: `Create Subscription Success` }));
    const event = 'purchase'
    analytics().logEvent(event, {
      currency: 'USD',
      transaction_id: generateTransactionId(event),
      value: price,
      items: [{ item_id: planId}],
    });
  } catch({response}) {
    const errorMsg = 'Failed to create user subscription.';
    yield put(updateSnackbar({ type: 'error', msg: `${errorMsg} with error: ${response.data.message}` }));
  }
}

function* subscriptionSaga() {
  yield all([
    takeLatest(loadAllPlan.toString(), loadAllPlanSaga),
    takeLatest(loadPlanByID.toString(), loadPlanByIDSaga),
    takeLatest(loadUserSubscription.toString(), loadUserSubscriptionSaga),
    takeLatest(loadSubscriptionInfo.toString(), loadSubscriptionInfoSaga),
    takeLatest(createUserSubscription.toString(), createUserSubscriptionSaga),
  ]);
}

export default subscriptionSaga;
