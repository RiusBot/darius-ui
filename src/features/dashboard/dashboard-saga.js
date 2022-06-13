import { all, put, select, takeLatest } from 'redux-saga/effects';
import {
  createUserBot,
  updateUserBot,
  deleteUserBot,
  loadUserBots,
  loadUserBotsSuccess,
  loadBotTrades,
  loadBotTradesSuccess,
} from '@/features/dashboard/dashboard-slice';
import { updateSnackbar } from '@/app/app-slice';
import getAxios from '@/common/utils/getAxios';
import { getAuthUser } from '@/common/selectors';

function* createUserBotSaga({ payload: createBotInfo }) {
  const axios = yield getAxios();
  const auth = yield select(getAuthUser);
  const data = { 
    uid: auth.uid,
    config: {
      api_id: createBotInfo.configOptions.api,
      pair_id: createBotInfo.configOptions.pair == "" ? null : createBotInfo.configOptions.pair,
      test: createBotInfo.orderOptions.test,
      duplicate: createBotInfo.orderOptions.duplicate,
      target: createBotInfo.configOptions.target,
      quantity: createBotInfo.configOptions.quantity,
      leverage: createBotInfo.configOptions.leverage,
      margin: createBotInfo.configOptions.margin / 100,
      minimum_volume: createBotInfo.configOptions.volume,
      stop_loss: createBotInfo.configOptions.stopLoss / 100,
      take_profit: createBotInfo.configOptions.takeProfit / 100,
      order_type: createBotInfo.configOptions.orderType,
      stop_loss_type: createBotInfo.configOptions.stopLossType,
      take_profit_type: createBotInfo.configOptions.takeProfitType,
      hyperopt: createBotInfo.configOptions.hyperopt
    },
    channel: createBotInfo.channel
  };
  const url = `/api/v1/create_user_bot`;
  const requestMethod = 'POST';
  try {
    const res = yield axios(url, {
      method: requestMethod,
      data,
    });
    yield put(loadUserBots());
    yield put(updateSnackbar({ type: 'success', msg: `Create New Bot Success` }));
  } catch({response}) {
    const errorMsg = 'Failed to create new bot';
    yield put(updateSnackbar({ type: 'error', msg: `${errorMsg} with error: ${response.data.message}` }));
  }
};

function* updateUserBotSaga({ payload: updateBotInfo }) {
  const axios = yield getAxios();
  const auth = yield select(getAuthUser);
  const data = { 
    uid: auth.uid,
    bot_id: updateBotInfo.botId,
    status: updateBotInfo.status,
    config: {
      api_id: updateBotInfo.configOptions.api,
      pair_id: updateBotInfo.configOptions.pair,
      test: updateBotInfo.orderOptions.test,
      hyperopt: updateBotInfo.configOptions.hyperopt,
      duplicate: updateBotInfo.orderOptions.duplicate,
      target: updateBotInfo.configOptions.target,
      quantity: updateBotInfo.configOptions.quantity,
      leverage: updateBotInfo.configOptions.leverage,
      margin: updateBotInfo.configOptions.margin / 100,
      minimum_volume: updateBotInfo.configOptions.volume,
      stop_loss: updateBotInfo.configOptions.stopLoss / 100,
      take_profit: updateBotInfo.configOptions.takeProfit / 100,
      order_type: updateBotInfo.configOptions.orderType,
      stop_loss_type: updateBotInfo.configOptions.stopLossType,
      take_profit_type: updateBotInfo.configOptions.takeProfitType
    },
  };
  const url = `/api/v1/update_user_bot`;
  const requestMethod = 'PATCH';
  try {
    const res = yield axios(url, {
      method: requestMethod,
      data,
    });
    yield put(loadUserBots());
    yield put(updateSnackbar({ type: 'success', msg: `Update Bot Success` }));
  } catch({response}) {
    const errorMsg = 'Failed to update bot';
    yield put(updateSnackbar({ type: 'error', msg: `${errorMsg} with error: ${response.data.message}` }));
  }
};

function* deleteUserBotSaga({ payload: deleteBotInfo }) {
  const axios = yield getAxios();
  const auth = yield select(getAuthUser);
  const url = `/api/v1/delete_user_bot`;
  const requestMethod = 'DELETE';
  const data = {
    uid: auth.uid,
    bot_id: deleteBotInfo.botId,
  }
  try {
    const res = yield axios(url, {
      method: requestMethod,
      data,
    });
    yield put(loadUserBots());
    yield put(updateSnackbar({ type: 'success', msg: `Delete Bot Success` }));
  } catch({response}) {
    const errorMsg = 'Failed to delete bot';
    yield put(updateSnackbar({ type: 'error', msg: `${errorMsg} with error: ${response.data.message}` }));
  }
}

function* loadUserBotsSaga({ payload: userInfo }) {
  const axios = yield getAxios();
  const auth = yield select(getAuthUser);
  const url = `/api/v1/get_user_bots`;
  const requestMethod = 'GET';
  const params = {
    uid: auth.uid,
  }
  try {
    const res = yield axios(url, {
      method: requestMethod,
      params
    });
    yield put(loadUserBotsSuccess(res.data));
  } catch({response}) {
    const errorMsg = 'Failed to get user bots';
    yield put(updateSnackbar({ type: 'error', msg: `${errorMsg} with error: ${response.data.message}` }));
  }
}

function* loadBotTradesSaga({ payload: botInfo }) {
  const axios = yield getAxios();
  const auth = yield select(getAuthUser);
  const url = `/api/v1/get_bot_trades2`;
  const requestMethod = 'GET';
  const params = {
    uid: auth.uid,
    bot_id: botInfo.botId,
    page: botInfo.page,
    pagesize: botInfo.pagesize,
  }
  try {
    const res = yield axios(url, {
      method: requestMethod,
      params
    });
    yield put(loadBotTradesSuccess({res: res.data, bot_id: botInfo.botId}));
  } catch({response}) {
    const errorMsg = 'Failed to get bot trades'
    yield put(updateSnackbar({ type: 'error', msg: `${errorMsg} with error: ${response.data.message}` }));
  }
}

function* dashboardSaga() {
  yield all([
    takeLatest(createUserBot.toString(), createUserBotSaga),
    takeLatest(updateUserBot.toString(), updateUserBotSaga),
    takeLatest(deleteUserBot.toString(), deleteUserBotSaga),
    takeLatest(loadUserBots.toString(), loadUserBotsSaga),
    takeLatest(loadBotTrades.toString(), loadBotTradesSaga),
  ]);
}

export default dashboardSaga;
