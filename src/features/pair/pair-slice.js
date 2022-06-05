import { createSlice } from '@reduxjs/toolkit';

const pairSlice = createSlice({
  name: 'pair',
  initialState: {
    userPair: {},
    allTokens: [],
    builtinPair: {},
  },
  reducers: {
    loadUserPair: () => {},
    loadUserPairSuccess: (state, action) => {
      action.payload.forEach((pair) => {
        pair.lists.sort();
        state.userPair[pair.pair_id] = pair;
      });
    },
    loadMarket: () => {},
    loadMarketSuccess: (state, action) => {
      state.allTokens = action.payload;
      state.allTokens.sort();
    },
    createUserPair: () => {},
    updateUserPair: () => {},
    deleteUserPair: () => {},
    loadBuiltinPair: () => {},
    loadBuiltinPairSuccess: (state, action) => {
      action.payload.forEach((pair) => {
        state.builtinPair[pair.pair_id] = pair;
      });
    },
  },
});

const { actions, reducer } = pairSlice;

export const {
  loadUserPair,
  loadUserPairSuccess,
  loadMarket,
  loadMarketSuccess,
  createUserPair,
  updateUserPair,
  deleteUserPair,
  loadBuiltinPair,
  loadBuiltinPairSuccess
} = actions

export default reducer;