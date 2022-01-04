import { createSelector } from 'reselect';

const getTransactionState = (state) => state.transaction;

export const getTransactionsFromState = createSelector(getTransactionState, (transaction) => transaction.transactions);
