import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    userInfo: {
      userId: 3,
      username: 'darius_test',
      email: 'darius@gmail.com',
    },
  },
  reducers: {
    updateUserInfo: () => {},
    updateUserInfoSuccess: (state, action) => {
      state.userInfo = action.payload;
    },
    createUser: () => {},
    createUserSussess: () => {},
  },
});

const { actions, reducer } = appSlice;

export const {
  updateUserInfo,
  updateUserInfoSuccess,
  createUser,
  createUserSussess,
} = actions

export default reducer;
