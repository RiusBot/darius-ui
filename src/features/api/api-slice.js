import { createSlice } from '@reduxjs/toolkit';

const apiSlice = createSlice({
  name: 'api',
  initialState: {
    userApi: {},
  },
  reducers: {
    loadUserApi: () => {},
    loadUserApiSuccess: (state, action) => {
      action.payload.forEach((api) => {
        state.userApi[api.api_id] = api;
      });
    },
    createUserApi: () => {},
    deleteUserApi: () => {},
  },
});

const { actions, reducer } = apiSlice;

export const {
  loadUserApi,
  loadUserApiSuccess,
  createUserApi,
  deleteUserApi,
} = actions

export default reducer;