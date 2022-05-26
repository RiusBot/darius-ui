import { all, put, select, takeLatest } from 'redux-saga/effects';
import { React, useState, useEffect } from 'react';
import {
  loadUserPair,
  loadUserPairSuccess,
  loadMarket,
  loadMarketSuccess,
  createUserPair,
  deleteUserPair,
} from '@/features/pair/pair-slice';
import { updateSnackbar } from '@/app/app-slice';
import getAxios from '@/common/utils/getAxios';
import { getAuthUser } from '@/common/selectors';

function* loadUserPairSaga() {
  const axios = yield getAxios();
  const auth = yield select(getAuthUser);
  const url = `/api/v1/get_user_pair`;
  const requestMethod = 'GET';
  const params = {
    uid: auth.uid,
  }
  try {
    const res = yield axios(url, {
      method: requestMethod,
      params
    });
    yield put(loadUserPairSuccess(res.data));
  } catch({response}) {
    const errorMsg = 'Failed to get user trading pair list';
    yield put(updateSnackbar({ type: 'error', msg: `${errorMsg} with error: ${response.data.message}` }));
  }
}

function* loadMarketSaga() {
  const axios = yield getAxios();
  const auth = yield select(getAuthUser);
  const url = `/api/v1/get_all_pair`;
  const requestMethod = 'GET';
  const params = {
    uid: auth.uid,
  }
  try {
    const res = yield axios(url, {
      method: requestMethod,
      params
    });
    yield put(loadMarketSuccess(res.data));
  } catch({response}) {
    const errorMsg = 'Failed to get user trading pair list';
    yield put(updateSnackbar({ type: 'error', msg: `${errorMsg} with error: ${response.data.message}` }));
  }
}

function* createUserPairSaga({ payload: pairInfo }) {
  const axios = yield getAxios();
  const auth = yield select(getAuthUser);
  const url = `/api/v1/create_user_pair`;
  const requestMethod = 'POST';
  const data = {
    uid: auth.uid,
    name: pairInfo.pair.name,
    lists: pairInfo.pair.lists,
    types: pairInfo.pair.types,
  }
  try {
    const res = yield axios(url, {
      method: requestMethod,
      data
    });
    yield put(loadUserPair());
    yield put(updateSnackbar({ type: 'success', msg: `Create Pair Key Success` }));
  } catch({response}) { 
    const errorMsg = 'Failed to create user trading pair list';
    yield put(updateSnackbar({ type: 'error', msg: `${errorMsg} with error: ${response.data.message}` }));
  }
}

function* deleteUserPairSaga({ payload: pairInfo }) {
  const axios = yield getAxios();
  const auth = yield select(getAuthUser);
  const url = `/api/v1/delete_user_pair`;
  const requestMethod = 'DELETE';
  const data = {
    uid: auth.uid,
    pair_id: pairInfo.pairId,
  }
  try {
    const res = yield axios(url, {
      method: requestMethod,
      data
    });
    yield put(loadUserPair());
    yield put(updateSnackbar({ type: 'success', msg: `Delete Pair Key Success` }));
  } catch({response}) {
    const errorMsg = 'Failed to delete user trading pair list';
    yield put(updateSnackbar({ type: 'error', msg: `${errorMsg} with error: ${response.data.message}` }));
  }
}

function* pairSaga() {
  yield all([
    takeLatest(loadUserPair.toString(), loadUserPairSaga),
    takeLatest(loadMarket.toString(), loadMarketSaga),
    takeLatest(createUserPair.toString(), createUserPairSaga),
    takeLatest(deleteUserPair.toString(), deleteUserPairSaga)
  ]);
}

export default pairSaga;
