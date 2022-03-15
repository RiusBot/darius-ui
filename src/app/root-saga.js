import { all, put, takeEvery } from 'redux-saga/effects';
import accountSaga from '@/features/account/account-saga';
import dashboardSaga from '@/features/dashboard/dashboard-saga';
import apiSaga from '@/features/api/api-saga';
import subscriptionSaga from '@/features/subscription/subscription-saga';
import transactionSaga from '@/features/transaction/transaction-saga';
import productSaga from '@/features/product/product-saga';

function* rootSaga() {
  yield all([
    accountSaga(),
    dashboardSaga(),
    apiSaga(),
    subscriptionSaga(),
    transactionSaga(),
    productSaga(),
  ]);
};

export default rootSaga;
