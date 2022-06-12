import { createSlice } from '@reduxjs/toolkit';

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    userBots: [],
    userBotTrades: {},
  },
  reducers: {
    createUserBot: () => {},
    updateUserBot: () => {},
    deleteUserBot: () => {},
    loadUserBots: () => {},
    loadUserBotsSuccess: (state, action) => {
      state.userBots = action.payload;
    },
    loadBotTrades: () => {},
    loadBotTradesSuccess: (state, action) => {
      const bot_id = action.payload.res[0].bot_id;
      if (action.payload.length != 0) {
        if (! state.userBotTrades[bot_id])
          state.userBotTrades[bot_id] = {};
        if (! state.userBotTrades[bot_id][action.payload.pagesize])
          state.userBotTrades[bot_id][action.payload.pagesize] = {};
        state.userBotTrades[bot_id][action.payload.pagesize][action.payload.page] = action.payload.res;
      }
    },
  },
});

const { actions, reducer } = dashboardSlice;

export const {
  createUserBot,
  updateUserBot,
  deleteUserBot,
  loadUserBots,
  loadUserBotsSuccess,
  loadBotTrades,
  loadBotTradesSuccess,
} = actions

export default reducer;
