import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    },
  },
  reducers: {
    createUser: () => {},
    createUserSussess: () => {},
  },
});

const { actions, reducer } = appSlice;

export const {
  createUser,
  createUserSussess,
} = actions

export default reducer;
