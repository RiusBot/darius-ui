import { createSlice } from '@reduxjs/toolkit';

const notifySlice = createSlice({
  name: 'notify',
  initialState: {
    config: {},
  },
  reducers: {
    loadUserNotify: () => {},
    loadUserNotifySuccess: (state, action) => {
      state.config = action.payload;
    },
    updateUserNotify: () => {},
  },
});

const { actions, reducer } = notifySlice;

export const {
  loadUserNotify,
  loadUserNotifySuccess,
  updateUserNotify,
} = actions

export default reducer;
