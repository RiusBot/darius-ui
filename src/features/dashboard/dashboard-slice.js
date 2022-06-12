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
      if (action.payload.length != 0) {
        const bot_id = action.payload.trades[0].bot_id;
        if (! state.userBotTrades[bot_id])
          state.userBotTrades[bot_id] = {};
        if (! state.userBotTrades[bot_id][action.payload.pagesize])
          state.userBotTrades[bot_id][action.payload.pagesize] = {};
        state.userBotTrades[bot_id][action.payload.pagesize][action.payload.page] = action.payload.trades;
        state.userBotTrades[bot_id][action.payload.pagesize].total_page = action.payload.total_page;
        state.userBotTrades[bot_id].total_count = action.payload.total_count;
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
