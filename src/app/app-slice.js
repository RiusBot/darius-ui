import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    userInfo: {
      userName: 'dariusAdmin',
      email: 'darius@gmail.com',
    },
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

const { actions, reducer } = appSlice;

export const {
  setUserInfo,
} = actions

export default reducer;
