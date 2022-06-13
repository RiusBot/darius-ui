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
      if (action.payload.res.trades.length != 0) {
        const bot_id = action.payload.bot_id;
        if (! state.userBotTrades[bot_id])
          state.userBotTrades[bot_id] = {};
        if (! state.userBotTrades[bot_id][action.payload.res.pagesize])
          state.userBotTrades[bot_id][action.payload.res.pagesize] = {};
        state.userBotTrades[bot_id][action.payload.res.pagesize][action.payload.res.page] = action.payload.res.trades;
        state.userBotTrades[bot_id][action.payload.res.pagesize].total_page = action.payload.res.total_page;
        state.userBotTrades[bot_id].total_count = action.payload.res.total_count;
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
