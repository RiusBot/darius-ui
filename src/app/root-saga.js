import { all, put, takeEvery } from 'redux-saga/effects';
import accountSaga from '@/features/account/account-saga';
import dashboardSaga from '@/features/dashboard/dashboard-saga';
import apiSaga from '@/features/api/api-saga';
import pairSaga from '@/features/pair/pair-saga';
import referralSaga from '@/features/referral/referral-saga';
import subscriptionSaga from '@/features/subscription/subscription-saga';
import transactionSaga from '@/features/transaction/transaction-saga';
import productSaga from '@/features/product/product-saga';
import notifySaga from '@/features/notify/notify-saga';

function* rootSaga() {
  yield all([
    accountSaga(),
    dashboardSaga(),
    apiSaga(),
    pairSaga(),
    subscriptionSaga(),
    transactionSaga(),
    productSaga(),
    referralSaga(),
    notifySaga(),
  ]);
};

export default rootSaga;
