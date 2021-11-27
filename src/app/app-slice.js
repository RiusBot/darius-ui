import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    userInfo: {
      userId: 3,
      userName: 'darius_test',
      email: 'darius@gmail.com',
    },
  },
  reducers: {
    updateUserInfo: () => {},
    updateUserInfoSuccess: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

const { actions, reducer } = appSlice;

export const {
  updateUserInfo,
  updateUserInfoSuccess
} = actions

export default reducer;
