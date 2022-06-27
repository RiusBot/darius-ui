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
    AllTime: {}
  },
  reducers: {
    loadPerformance: () => {},
    loadPerformanceSuccess: (state, action) => {
      Object.keys(action.payload).forEach(channel => {
        state[channel] = action.payload[channel];
      })
    },
    loadAllTimePerformance: () => {},
    loadAllTimePerformanceSuccess: (state, action) => {
      console.log(action.payload.channel);
      state['AllTime'][action.payload.channel] = action.payload
    },
  },
});

const { actions, reducer } = productSlice;

export const {
  loadPerformance,
  loadPerformanceSuccess,
  loadAllTimePerformance,
  loadAllTimePerformanceSuccess,
} = actions

export default reducer;
