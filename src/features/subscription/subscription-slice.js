import { createSlice } from '@reduxjs/toolkit';

const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState: {
    plans: {},
    subscriptions: [],
    info: {},
  },
  reducers: {
    loadAllPlan: () => {},
    loadAllPlanSuccess: (state, action) => {
      if (action.payload.length == 0) return;
      state.plans = {};
      action.payload.forEach(plan => {
        if (! Object.keys(state.plans).includes(plan.channel)) {
          state.plans[plan.channel] = {};
        }
        state.plans[plan.channel][plan.plan_id] = plan;
      });
    },
    loadPlanByID: () => {},
    loadPlanByIDSuccess: () => {

    },
    loadUserSubscription: () => {},
    loadUserSubscriptionSuccess: (state, action) => {
      state.subscriptions = action.payload;
    },
    loadSubscriptionInfo: () => {},
    loadSubscriptionInfoSuccess: (state, action) => {
      state.info[action.payload.channel] = action.payload.data;
    },
    createUserSubscription: () => {},
  },
});

const { actions, reducer } = subscriptionSlice;

export const {
  loadAllPlan,
  loadAllPlanSuccess,
  loadPlanByID,
  loadPlanByIDSuccess,
  loadUserSubscription,
  loadUserSubscriptionSuccess,
  loadSubscriptionInfo,
  loadSubscriptionInfoSuccess,
  createUserSubscription,
} = actions

export default reducer;
