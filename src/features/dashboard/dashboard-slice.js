import { createSlice } from '@reduxjs/toolkit';

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    userBots: [],
    userBotTrades: {},
  },
  reducers: {
    createUserBot: () => {},
    deleteUserBot: () => {},
    loadUserBots: () => {},
    loadUserBotsSuccess: (state, action) => {
      state.userBots = action.payload;
    },
    loadBotTrades: () => {},
    loadBotTradesSuccess: (state, action) => {
      if (action.payload.length != 0) {
        state.userBotTrades[action.payload[0].bot_id] = action.payload;
      }
    },
  },
});

const { actions, reducer } = dashboardSlice;

export const {
  createUserBot,
  deleteUserBot,
  loadUserBots,
  loadUserBotsSuccess,
  loadBotTrades,
  loadBotTradesSuccess,
} = actions

export default reducer;
