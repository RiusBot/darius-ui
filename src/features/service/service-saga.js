import { all, put, select, takeLatest } from 'redux-saga/effects';
import {
  getAllPlan,
  getAllPlanSuccess,
  getPlanByID,
  getPlanByIDSuccess,
} from '@/features/service/service-slice';
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
    const errorMsg = 'Failed to get plan with plan ID: ' + planId.toString();
    yield put(updateSnackbar({ type: 'error', msg: `${errorMsg} with error: ${response.data.message}` }));
  }
}

function* serviceSaga() {
  yield all([
    takeLatest(getAllPlan.toString(), getAllPlanSaga),
    takeLatest(getPlanByID.toString(), getPlanByIDSaga),
  ]);
}

export default serviceSaga;
