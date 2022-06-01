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
        state.userPair[pair.pair_id] = pair;
      });
    },
    loadMarket: () => {},
    loadMarketSuccess: (state, action) => {
      state.allTokens = action.payload;
    },
    createUserPair: () => {},
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
  deleteUserPair,
  loadBuiltinPair,
  loadBuiltinPairSuccess
} = actions

export default reducer;