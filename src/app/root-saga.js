import { all, put, takeEvery } from 'redux-saga/effects';
import accountSaga from '@/features/account/account-saga';
import dashboardSaga from '@/features/dashboard/dashboard-saga';

function* rootSaga() {
  yield all([
    accountSaga(),
    dashboardSaga(),
  ]);
};

export default rootSaga;
