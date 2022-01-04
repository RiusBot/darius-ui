import { createSlice } from '@reduxjs/toolkit';

const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState: {
    plans: {},
    subscriptions: [],
  },
  reducers: {
    getAllPlan: () => {},
    getAllPlanSuccess: (state, action) => {
      console.log(action);
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
    },
    createUserSubscription: () => {},
  },
});

const { actions, reducer } = subscriptionSlice;

export const {
  getAllPlan,
  getAllPlanSuccess,
  getPlanByID,
  getPlanByIDSuccess,
  getUserSubscription,
  getUserSubscriptionSuccess,
  createUserSubscription,
} = actions

export default reducer;
