import { createSelector } from 'reselect';

const getPairState = (state) => state.pair;

export const getUserPair = createSelector(getPairState, (pair) => pair.userPair);
