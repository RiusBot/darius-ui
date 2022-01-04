import { createSlice } from '@reduxjs/toolkit';

const transactionSlice = createSlice({
  name: 'transaction',
  initialState: {
    transactions: [],
  },
  reducers: {
    getUserTransaction: () => {},
    getUserTransactionSuccess: (state, action) => {
      state.transactions = action.payload
    },
    createUserTransaction: () => {},
  },
});

const { actions, reducer } = transactionSlice;

export const {
  getUserTransaction,
  getUserTransactionSuccess,
  createUserTransaction,
} = actions

export default reducer;
