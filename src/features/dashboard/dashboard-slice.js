import { createSlice } from '@reduxjs/toolkit';

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    userBots: [],
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
      // TODO: update user bot list
      state.userBots = action.payload;
      console.log(action.payload);
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
} = actions

export default reducer;
