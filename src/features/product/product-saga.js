import { all, put, select, takeLatest } from 'redux-saga/effects';
import {
  loadPerformance,
  loadPerformanceSuccess,
} from '@/features/product/product-slice';
import { updateSnackbar } from '@/app/app-slice';
import getAxios from '@/common/utils/getAxios';

function* loadPerformanceSaga() {
  const axios = yield getAxios();
  const url = `/api/v1/get_performance`;
  const requestMethod = 'GET';
  try {
    const res = yield axios(url, {
      method: requestMethod,
    });
    yield put(loadPerformanceSuccess(res.data));
  } catch({response}) {
    const errorMsg = 'Failed to get performance'
    yield put(updateSnackbar({ type: 'error', msg: `${errorMsg} with error: ${response.data.message}` }));
  }
}

function* productSaga() {
  yield all([
    takeLatest(loadPerformance.toString(), loadPerformanceSaga),
  ]);
}

export default productSaga;
