import { createSlice } from '@reduxjs/toolkit';

const apiSlice = createSlice({
  name: 'api',
  initialState: {
    userApi: {},
  },
  reducers: {
    getUserApi: () => {},
    getUserApiSuccess: (state, action) => {
      action.payload.forEach((api) => {
        state.userApi[api.api_id] = api;
      });
    },
    createUserApi: () => {},
    createUserApiSuccess: (state, action, apiInfo) => {
      getUserApi();
    },
    deleteUserApi: () => {},
    deleteUserApiSuccess: (state, action) => {
    }
  },
});

const { actions, reducer } = apiSlice;

export const {
  getUserApi,
  getUserApiSuccess,
  createUserApi,
  createUserApiSuccess,
  deleteUserApi,
  deleteUserApiSuccess,
} = actions

export default reducer;