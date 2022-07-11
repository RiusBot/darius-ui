import { createSlice } from '@reduxjs/toolkit';

const referralSlice = createSlice({
  name: 'referral',
  initialState: {
    userReferral: {},
    userReferralHistory: {},
  },
  reducers: {
    loadUserReferral: () => {},
    loadUserReferralSuccess: (state, action) => {
      state.userReferral = action.payload;
    },
    loadUserReferralHistory: () => {},
    loadUserReferralHistorySuccess: (state, action) => {
      if (! state.userReferralHistory[action.payload.pagesize])
        state.userReferralHistory[action.payload.pagesize] = {};
      if (! state.userReferralHistory[action.payload.pagesize][action.payload.page])
        state.userReferralHistory[action.payload.pagesize][action.payload.page] = {};
      state.userReferralHistory[action.payload.pagesize][action.payload.page] = action.payload.referral_history;
      state.userReferralHistory[action.payload.pagesize].total_page = action.payload.total_page;
      state.userReferralHistory.total_count = action.payload.total_count;
    },
    updateUserReferral: () => {}
  },
});

const { actions, reducer } = referralSlice;

export const {
  loadUserReferral,
  loadUserReferralSuccess,
  loadUserReferralHistory,
  loadUserReferralHistorySuccess,
  updateUserReferral,
} = actions

export default reducer;