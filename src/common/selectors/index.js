import { createSelector } from 'reselect';

const getFirebaseState = (state) => state.firebase;

export const getAuthUser = createSelector(getFirebaseState, (firebase) => firebase.auth);

export const getUserProfile = createSelector(getFirebaseState, (firebase) => firebase.profile);
