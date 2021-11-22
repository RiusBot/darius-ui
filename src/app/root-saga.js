import { all, put, takeEvery } from 'redux-saga/effects';
import accountSaga from '@/features/account/account-saga';

function* rootSaga() {
  yield all([
    accountSaga(),
  ]);
};

export default rootSaga;
