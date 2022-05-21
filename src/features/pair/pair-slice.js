import { createSlice } from '@reduxjs/toolkit';

const pairSlice = createSlice({
  name: 'pair',
  initialState: {
    userPair: {},
  },
  reducers: {
    loadUserPair: () => {},
    loadUserPairSuccess: (state, action) => {
      action.payload.forEach((pair) => {
        state.userPair[pair.pair_id] = pair;
      });
    },
    createUserPair: () => {},
    deleteUserPair: () => {},
  },
});

const { actions, reducer } = pairSlice;

export const {
  loadUserPair,
  loadUserPairSuccess,
  createUserPair,
  deleteUserPair,
} = actions

export default reducer;