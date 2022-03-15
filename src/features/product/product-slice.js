import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    ROSE: [],
    PERPETUAL: [],
    WHALE: [],
    DAILYSCALP: [],
    VEGAS: [],
    JUSTIN: [],
    WEBHOOK: [],
  },
  reducers: {
    loadPerformance: () => {},
    loadPerformanceSuccess: (state, action) => {
      Object.keys(action.payload).forEach(channel => {
        state[channel] = action.payload[channel];
      })
    },
  },
});

const { actions, reducer } = productSlice;

export const {
  loadPerformance,
  loadPerformanceSuccess,
} = actions

export default reducer;
