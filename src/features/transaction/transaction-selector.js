import { createSelector } from 'reselect';

const getTransactionState = (state) => state.transaction;

export const getTransactions = createSelector(getTransactionState, (transaction) => transaction.transactions);
