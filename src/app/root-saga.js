import { all, put, takeEvery } from 'redux-saga/effects';
import accountSaga from '@/features/account/account-saga';
import dashboardSaga from '@/features/dashboard/dashboard-saga';
import apiSaga from '@/features/api/api-saga';
import subscriptionSaga from '@/features/subscription/subscription-saga';

function* rootSaga() {
  yield all([
    accountSaga(),
    dashboardSaga(),
    apiSaga(),
    subscriptionSaga(),
  ]);
};

export default rootSaga;
