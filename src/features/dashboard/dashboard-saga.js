import { all, put, select, takeLatest } from 'redux-saga/effects';
import {
  createBot,
  botCreationSuccess,
  deleteBot,
  botDeletionSuccess,
  getUserBots,
  getUserBotsSuccess,
} from '@/features/dashboard/dashboard-slice';
import getAxios from '@/common/utils/getAxios';

function* createBotSaga({ payload: createBotInfo }) {
  const axios = yield getAxios();
  const data = { 
    user_id: createBotInfo.userId,
    api_id: createBotInfo.apiId,
    config: {
      api: {
        api_key: createBotInfo.config.api.apiKey,
        api_secret: createBotInfo.config.api.apiSecret,
        exchange: createBotInfo.config.api.exchange,
      },
      test: createBotInfo.config.test,
      duplicate: createBotInfo.config.duplicate,
      target: createBotInfo.config.target,
      quantity: createBotInfo.config.quantity,
      leverage: createBotInfo.config.leverage,
      margin: createBotInfo.config.margin,
      minimum_volume: createBotInfo.config.minimumVolume,
      stop_loss: createBotInfo.config.stopLoss,
      take_profit: createBotInfo.config.takeProfit,
      order_type: createBotInfo.config.orderType,
      stop_loss_type: createBotInfo.config.stopLossType,
      take_profit_type: createBotInfo.config.takeProfitType
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
    yield put(botCreationSuccess(createBotInfo));
  } catch(error) {
    const errorMsg = 'Failed to create new bot';
  }
};

function* deleteBotSaga({ payload: deleteBotInfo }) {
  const axios = yield getAxios();
  const url = `/api/v1/delete_user_bot`;
  const requestMethod = 'DELETE';
  const data = {
    user_id: deleteBotInfo.userId,
    bot_id: deleteBotInfo.botId,
  }
  try {
    const res = yield axios(url, {
      method: requestMethod,
      data,
    });
    yield put(botDeletionSuccess(deleteBotInfo));
  } catch(error) {
    const errorMsg = 'Failed to delete bot';
  }
}

function* getUserBotsSaga({ payload: userID }) {
  const axios = yield getAxios();
  const url = `/api/v1/get_user_bots`;
  const requestMethod = 'GET';
  const data = {
    user_id: userId,
  }
  try {
    const res = yield axios(url, {
      method: requestMethod,
      data,
    });
    yield put(getUserBotsSuccess(res));
  } catch(error) {
    const errorMsg = 'Failed to get user bots';
  }
}

function* dashboardSaga() {
  yield all([
    takeLatest(createBot.toString(), createBotSaga),
    takeLatest(deleteBot.toString(), deleteBotSaga),
    takeLatest(getUserBots.toString(), getUserBotsSaga),
  ]);
}

export default dashboardSaga;
