import { all, put, select, takeLatest } from 'redux-saga/effects';
import {
  createUserBot,
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
      take_profit_type: createBotInfo.configOptions.takeProfitType
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
  const url = `/api/v1/get_bot_trades`;
  const requestMethod = 'GET';
  const params = {
    uid: auth.uid,
    bot_id: botInfo.botId,
  }
  try {
    const res = yield axios(url, {
      method: requestMethod,
      params
    });
    yield put(loadBotTradesSuccess(res.data));
  } catch({response}) {
    const errorMsg = 'Failed to get bot trades'
    yield put(updateSnackbar({ type: 'error', msg: `${errorMsg} with error: ${response.data.message}` }));
  }
}

function* dashboardSaga() {
  yield all([
    takeLatest(createUserBot.toString(), createUserBotSaga),
    takeLatest(deleteUserBot.toString(), deleteUserBotSaga),
    takeLatest(loadUserBots.toString(), loadUserBotsSaga),
    takeLatest(loadBotTrades.toString(), loadBotTradesSaga),
  ]);
}

export default dashboardSaga;
