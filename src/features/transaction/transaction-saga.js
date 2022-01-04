import { all, put, select, takeLatest } from 'redux-saga/effects';
import {
  getUserTransaction,
  getUserTransactionSuccess,
  createUserTransaction,
} from '@/features/transaction/transaction-slice';
import { updateSnackbar } from '@/app/app-slice';
import getAxios from '@/common/utils/getAxios';
import { getAuthUser } from '@/common/selectors';

function* getUserTransactionSaga() {
  const axios = yield getAxios();
  const auth = yield select(getAuthUser);
  const url = `/api/v1/get_user_transaction`;
  const requestMethod = 'GET';
  const params = {
    uid: auth.uid,
  }
  try {
    const res = yield axios(url, {
      method: requestMethod,
      params
    });
    yield put(getUserTransactionSuccess(res.data));
  } catch({response}) {
    const errorMsg = 'Failed to get transactions'
    yield put(updateSnackbar({ type: 'error', msg: `${errorMsg} with error: ${response.data.message}` }));
  }
}

function* createUserTransactionSaga({ payload: transactionInfo }) {
  const axios = yield getAxios();
  const auth = yield select(getAuthUser);
  const url = `/api/v1/create_user_transaction`;
  const requestMethod = 'POST';
  const data = {
    uid: auth.uid,
    wallet: transactionInfo.wallet,
    txid: transactionInfo.txid,
    date: transactionInfo.date,
    amount: transactionInfo.amount,
  }
  try {
    const res = yield axios(url, {
      method: requestMethod,
      data,
    });
    yield put(getUserTransaction());
  } catch({response}) {
    const errorMsg = 'Failed to create user transaction.';
    yield put(updateSnackbar({ type: 'error', msg: `${errorMsg} with error: ${response.data.message}` }));
  }
}

function* transactionSaga() {
  yield all([
    takeLatest(getUserTransaction.toString(), getUserTransactionSaga),
    takeLatest(createUserTransaction.toString(), createUserTransactionSaga),
  ]);
}

export default transactionSaga;
