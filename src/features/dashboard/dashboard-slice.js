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
    getUserBots: () => {},
    getUserBotsSuccess: (state, action) => {
      state.userBots = action.payload;
    },
    getBotTrades: () => {},
    getBotTradesSuccess: (state, action) => {
      // console.log(action.payload);
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
  getUserBots,
  getUserBotsSuccess,
  getBotTrades,
  getBotTradesSuccess,
} = actions

export default reducer;
