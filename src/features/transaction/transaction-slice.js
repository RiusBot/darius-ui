import { createSlice } from '@reduxjs/toolkit';

const transactionSlice = createSlice({
  name: 'transaction',
  initialState: {
    transactions: [],
  },
  reducers: {
    loadUserTransaction: () => {},
    loadUserTransactionSuccess: (state, action) => {
      state.transactions = action.payload
    },
    createUserTransaction: () => {},
  },
});

const { actions, reducer } = transactionSlice;

export const {
  loadUserTransaction,
  loadUserTransactionSuccess,
  createUserTransaction,
} = actions

export default reducer;
