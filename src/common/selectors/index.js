import { createSelector } from 'reselect';

const getFirebaseState = (state) => state.firebase;

export const getAuthUser = createSelector(getFirebaseState, (firebase) => firebase.auth);

