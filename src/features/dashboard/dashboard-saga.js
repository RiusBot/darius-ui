import { all, put, select, takeLatest } from 'redux-saga/effects';
import {
  createUserBot,
  createUserBotSuccess,
  deleteUserBot,
  deleteUserBotSuccess,
  getUserBots,
  getUserBotsSuccess,
  getBotTrades,
  getBotTradesSuccess,
  getUserApi,
  getUserApiSuccess,
} from '@/features/dashboard/dashboard-slice';
import getAxios from '@/common/utils/getAxios';

function* createUserBotSaga({ payload: createBotInfo }) {
  console.log(createBotInfo);
  const axios = yield getAxios();
  const data = { 
    uid: createBotInfo.userId,
    config: {
      api_id: createBotInfo.configOptions.api,
      test: createBotInfo.orderOptions.test,
      duplicate: createBotInfo.orderOptions.duplicate,
      target: createBotInfo.configOptions.target,
      quantity: parseInt(createBotInfo.configOptions.quantity),
      leverage: parseInt(createBotInfo.configOptions.leverage),
      margin: parseInt(createBotInfo.configOptions.margin),
      minimum_volume: parseInt(createBotInfo.configOptions.minimumVolume),
      stop_loss: createBotInfo.configOptions.stopLoss,
      take_profit: createBotInfo.configOptions.takeProfit,
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
    yield put(createUserBotSuccess(createBotInfo));
  } catch(error) {
    const errorMsg = 'Failed to create new bot';
  }
};

function* deleteUserBotSaga({ payload: deleteBotInfo }) {
  const axios = yield getAxios();
  const url = `/api/v1/delete_user_bot`;
  const requestMethod = 'DELETE';
  const data = {
    uid: deleteBotInfo.userId,
    bot_id: deleteBotInfo.botId,
  }
  try {
    const res = yield axios(url, {
      method: requestMethod,
      data,
    });
    yield put(deleteUserBotSuccess(deleteBotInfo));
  } catch(error) {
    const errorMsg = 'Failed to delete bot';
  }
}

function* getUserBotsSaga({ payload: userInfo }) {
  const axios = yield getAxios();
  const url = `/api/v1/get_user_bots`;
  const requestMethod = 'GET';
  const params = {
    uid: userInfo.userId,
    subaccount: userInfo.subaccount,
  }
  try {
    const res = yield axios(url, {
      method: requestMethod,
      params
    });
    yield put(getUserBotsSuccess(res.data));
  } catch(error) {
    const errorMsg = 'Failed to get user bots';
  }
}

function* getBotTradesSaga({ payload: botInfo }) {
  const axios = yield getAxios();
  const url = `/api/v1/get_bot_trades`;
  const requestMethod = 'GET';
  const params = {
    uid: botInfo.userId,
    bot_id: botInfo.botId,
  }
  try {
    const res = yield axios(url, {
      method: requestMethod,
      params
    });
    yield put(getBotTradesSuccess(res.data));
  } catch(error) {
    const errorMsg = 'Failed to get bot trades'
  }
}

function* getUserApiSaga({ payload: userInfo }) {
  const axios = yield getAxios();
  const url = `/api/v1/get_user_api`;
  const requestMethod = 'GET';
  const params = {
    uid: userInfo.userId,
  }
  try {
    const res = yield axios(url, {
      method: requestMethod,
      params
    });
    yield put(getUserApiSuccess(res.data));
  } catch(error) {
    const errorMsg = 'Failed to get user API';
  }
}

function* dashboardSaga() {
  yield all([
    takeLatest(createUserBot.toString(), createUserBotSaga),
    takeLatest(deleteUserBot.toString(), deleteUserBotSaga),
    takeLatest(getUserBots.toString(), getUserBotsSaga),
    takeLatest(getBotTrades.toString(), getBotTradesSaga),
    takeLatest(getUserApi.toString(), getUserApiSaga),
  ]);
}

export default dashboardSaga;
