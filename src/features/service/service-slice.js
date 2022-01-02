import { createSlice } from '@reduxjs/toolkit';

const serviceSlice = createSlice({
  name: 'service',
  initialState: {
    plans: {},
    subscriptions: [],
  },
  reducers: {
    getAllPlan: () => {},
    getAllPlanSuccess: (state, action) => {
      if (action.payload.length == 0) return;
      state.plans = {};
      action.payload.forEach(plan => {
        if (! Object.keys(state.plans).includes(plan.channel)) {
          state.plans[plan.channel] = {};
        }
        state.plans[plan.channel][plan.plan_id] = plan;
      });
    },
    getPlanByID: () => {},
    getPlanByIDSuccess: () => {

    },
    getUserSubscription: () => {},
    getUserSubscriptionSuccess: (state, action) => {
      state.subscriptions = action.payload;
    }
  },
});

const { actions, reducer } = serviceSlice;

export const {
  getAllPlan,
  getAllPlanSuccess,
  getPlanByID,
  getPlanByIDSuccess,
  getUserSubscription,
  getUserSubscriptionSuccess,
} = actions

export default reducer;
