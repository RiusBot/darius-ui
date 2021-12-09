import { createSelector } from 'reselect';

const getAppState = (state) => state.app;
const getFirebaseState = (state) => state.firebase;

export const getAuthUser = createSelector(getFirebaseState, (firebase) => firebase.auth);

export const getUserProfile = createSelector(getFirebaseState, (firebase) => firebase.profile);

export const getSnackbarInfo = createSelector(getAppState, (app) => app.snackbarInfo);