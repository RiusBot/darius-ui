import { createSelector } from 'reselect';

const getProductState = (state) => state.product;

export const getAllPerformance = createSelector(getProductState, (product) => product);