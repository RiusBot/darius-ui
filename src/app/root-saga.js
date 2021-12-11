import { all, put, takeEvery } from 'redux-saga/effects';
import accountSaga from '@/features/account/account-saga';
import dashboardSaga from '@/features/dashboard/dashboard-saga';
import apiSaga from '@/features/api/api-saga';

function* rootSaga() {
  yield all([
    accountSaga(),
    dashboardSaga(),
    apiSaga(),
  ]);
};

export default rootSaga;
