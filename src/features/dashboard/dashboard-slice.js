import { createSlice } from '@reduxjs/toolkit';

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    userBots: [],
    userBotTrades: {},
  },
  reducers: {
    createUserBot: () => {},
    createUserBotSuccess: (state, action) => {
      // TODO: update user bot list 
    },
    deleteUserBot: () => {},
    deleteUserBotSuccess: (state, action) => {
      // TODO: update user bot list
    },
    getUserBots: () => {},
    getUserBotsSuccess: (state, action) => {
      state.userBots = action.payload;
    },
    getBotTrades: () => {},
    getBotTradesSuccess: (state, action) => {
      state.userBotTrades[action.payload[0].bot_id] = action.payload;
    },
  },
});

const { actions, reducer } = dashboardSlice;

export const {
  createUserBot,
  createUserBotSuccess,
  deleteUserBot,
  deleteUserBotSuccess,
  getUserBots,
  getUserBotsSuccess,
  getBotTrades,
  getBotTradesSuccess,
} = actions

export default reducer;
