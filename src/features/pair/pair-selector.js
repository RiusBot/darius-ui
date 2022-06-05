import { createSelector } from 'reselect';

const getPairState = (state) => state.pair;

export const getUserPair = createSelector(getPairState, (pair) => pair.userPair);
export const getBuiltinPair = createSelector(getPairState, (pair) => pair.builtinPair);
export const getAllToken = createSelector(getPairState, (pair) => pair.allTokens);
export const getAllPair = createSelector(getPairState, (pair) => { return {...pair.userPair, ...pair.builtinPair}});
