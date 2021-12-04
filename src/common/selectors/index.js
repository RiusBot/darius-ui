import { createSelector } from 'reselect';

const getFirebaseState = (state) => state.firebase;

export const getUserAuth = createSelector(getFirebaseState, (firebase) => firebase.auth);

