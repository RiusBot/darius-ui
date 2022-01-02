import { createSlice } from '@reduxjs/toolkit';

const serviceSlice = createSlice({
  name: 'service',
  initialState: {
    plans: [],
    subscriptions: [],
  },
  reducers: {
    getAllPlan: () => {},
    getAllPlanSuccess: (state, action) => {
      console.log(action.payload);
      state.plans = action.payload;
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
