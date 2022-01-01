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

    }
    
  },
});

const { actions, reducer } = serviceSlice;

export const {
  getAllPlan,
  getAllPlanSuccess,
  getPlanByID,
  getPlanByIDSuccess,
} = actions

export default reducer;
