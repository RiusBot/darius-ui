import { createSlice } from '@reduxjs/toolkit';

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    userBots: [],
    userBotTrades: {},
  },
  reducers: {
    createBot: () => {},
    botCreationSuccess: (state, action) => {
      // TODO: update user bot list 
    },
    deleteBot: () => {},
    botDeletionSuccess: (state, action) => {
      // TODO: update user bot list
    },
    getUserBots: () => {},
    getUserBotsSuccess: (state, action) => {
      state.userBots = action.payload;
    },
    getBotTrades: () => {},
    getBotTradesSuccess: (state, action) => {
      state.userBotTrades[action.payload[0].bot_id] = action.payload;
    }
  },
});

const { actions, reducer } = dashboardSlice;

export const {
  createBot,
  botCreationSuccess,
  deleteBot,
  botDeletionSuccess,
  getUserBots,
  getUserBotsSuccess,
  getBotTrades,
  getBotTradesSuccess,
} = actions

export default reducer;
