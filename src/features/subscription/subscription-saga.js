import { all, put, select, takeLatest } from 'redux-saga/effects';
import {
  getAllPlan,
  getAllPlanSuccess,
  getPlanByID,
  getPlanByIDSuccess,
  getUserSubscription,
  getUserSubscriptionSuccess,
  createUserSubscription,
} from '@/features/subscription/subscription-slice';
import { updateSnackbar } from '@/app/app-slice';
import getAxios from '@/common/utils/getAxios';
import { getAuthUser } from '@/common/selectors';

function* getAllPlanSaga() {
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
    yield put(getAllPlanSuccess(res.data));
  } catch({response}) {
    const errorMsg = 'Failed to get plans'
    yield put(updateSnackbar({ type: 'error', msg: `${errorMsg} with error: ${response.data.message}` }));
  }
}

function* getPlanByIDSaga({ payload: planId }) {
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
    yield put(getPlanByIDSuccess(res.data));
  } catch({response}) {
    const errorMsg = 'Failed to get plan';
    yield put(updateSnackbar({ type: 'error', msg: `${errorMsg} with error: ${response.data.message}` }));
  }
}

function* getUserSubscriptionSaga() {
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
    yield put(getUserSubscriptionSuccess(res.data));
  } catch({response}) {
    const errorMsg = 'Failed to get user subscriptions.';
    yield put(updateSnackbar({ type: 'error', msg: `${errorMsg} with error: ${response.data.message}` }));
  }
}

function* createUserSubscriptionSaga({ payload: planId }) {
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
    yield put(getUserSubscription());
  } catch({response}) {
    const errorMsg = 'Failed to create user subscription.';
    yield put(updateSnackbar({ type: 'error', msg: `${errorMsg} with error: ${response.data.message}` }));
  }
}

function* subscriptionSaga() {
  yield all([
    takeLatest(getAllPlan.toString(), getAllPlanSaga),
    takeLatest(getPlanByID.toString(), getPlanByIDSaga),
    takeLatest(getUserSubscription.toString(), getUserSubscriptionSaga),
    takeLatest(createUserSubscription.toString(), createUserSubscriptionSaga),
  ]);
}

export default subscriptionSaga;
